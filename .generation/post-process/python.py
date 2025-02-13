#!/bin/python3

'''
Post-processing of generated code.
'''

import sys
from pathlib import Path
from typing import List, Literal, Callable, Generator
from textwrap import dedent, indent
from util import modify_file, version

INDENT = '    '
HALF_INDENT = '  '

def api_client_py(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the api_client.py file.'''
    for line in file_contents:
        dedented_line = dedent(line)

        if dedented_line.startswith('self.user_agent = '):
            line = indent(dedent(f'''\
            self.user_agent = 'geoengine/openapi-client/python/{version('python')}'
            '''), 2 * INDENT)

        yield line

def exceptions_py(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the exceptions.py file.'''
    for line in file_contents:
        if dedent(line).startswith('"""Custom error messages for exception"""'):
            line = line + '\n' + indent(dedent('''\
            # Note: changed message formatting
            import json
            parsed_body = json.loads(self.body)
            return f'{parsed_body["error"]}: {parsed_body["message"]}'
            
            '''), 2 * INDENT)

        yield line

def task_status_with_id_py(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the task_status_with_id.py file.'''
    for line in file_contents:
        dedented_line = dedent(line)
        if dedented_line.startswith('if self.info is None and'):
            line = indent(dedent('''\
            # Note: fixed handling of actual_instance
            if getattr(self.actual_instance, "info", None) is None and "info" in self.actual_instance.__fields_set__:
            '''), 2 * INDENT)

        elif dedented_line.startswith('if self.clean_up is None and'):
            line = indent(dedent('''\
            # Note: fixed handling of actual_instance
            if getattr(self.actual_instance, "clean_up", None) is None and "clean_up" in self.actual_instance.__fields_set__:
            '''), 2 * INDENT)

        elif dedented_line.startswith('if self.error is None and'):
            line = indent(dedent('''\
            # Note: fixed handling of actual_instance
            if getattr(self.actual_instance, "error", None) is None and "error" in self.actual_instance.__fields_set__:
            '''), 2 * INDENT)

        elif dedented_line.startswith('_obj = cls.model_validate({'):
            line = indent(dedent('''\
            # Note: fixed handling of actual_instance
            _obj = cls.model_validate({
                "actual_instance": TaskStatus.from_dict(obj).actual_instance,
                "task_id": obj.get("taskId")
            })
            return _obj
            '''), 2 * INDENT) + '\n' + line

        yield line

EARLY_RETURN_EMPTY_HTTP_RESPONSE = indent(dedent('''\
    # Note: fixed handling of empty responses
    if response_data.data is None:
        return None
    '''), 2 * INDENT)

def tasks_api_py(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the tasks_api.py file.'''
    state: Literal[None, 'abort_handler'] = None
    for line in file_contents:
        dedented_line = dedent(line)
        if state is None and dedented_line.startswith('def abort_handler('):
            state = 'abort_handler'

        elif state == 'abort_handler' and \
            dedented_line.startswith('return self.api_client.response_deserialize('):
            line = EARLY_RETURN_EMPTY_HTTP_RESPONSE + '\n' + line
            state = None

        yield line

def layers_api_py(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the tasks_api.py file.'''
    state: Literal[
        None,
        'add_early_return_empty_http_response',
    ] = None
    for line in file_contents:
        dedented_line = dedent(line)
        if state is None and (
            dedented_line.startswith('def add_existing_layer_to_collection(')
            or
            dedented_line.startswith('def add_existing_collection_to_collection(')
            or
            dedented_line.startswith('def remove_collection_from_collection(')
            or
            dedented_line.startswith('def remove_layer_from_collection(')
            or
            dedented_line.startswith('def remove_collection(')
        ):
            state = 'add_early_return_empty_http_response'

        elif state == 'add_early_return_empty_http_response' and \
            dedented_line.startswith('return self.api_client.response_deserialize('):
            line = EARLY_RETURN_EMPTY_HTTP_RESPONSE + '\n' + line
            state = None

        yield line

def ogc_xyz_api_py(ogc_api: Literal['wfs', 'wms']) -> Callable[[List[str]], Generator[str, None, None]]:
    def ogc_wfs_api_py(file_contents: List[str]) -> Generator[str, None, None]:
        '''Modify the ogc_wfs_api.py file.'''
        for line in file_contents:
            dedented_line = dedent(line)
            if dedented_line.startswith(f"resource_path='/{ogc_api}/{{workflow}}?request="):
                line = indent(dedent(f'''\
                # Note: remove query string in path part for ogc endpoints
                resource_path='/{ogc_api}/{{workflow}}',
                '''), 3 * INDENT)

            yield line
    return ogc_wfs_api_py

input_file = Path(sys.argv[1])

file_modifications = {
    'api_client.py': api_client_py,
    'exceptions.py': exceptions_py,
    'layers_api.py': layers_api_py,
    'ogcwfs_api.py': ogc_xyz_api_py('wfs'),
    'ogcwms_api.py': ogc_xyz_api_py('wms'),
    'task_status_with_id.py': task_status_with_id_py,
    'tasks_api.py': tasks_api_py,
}

if modifier_function := file_modifications.get(input_file.name):
    modify_file(input_file, modifier_function)
else:
    pass # leave file untouched

exit(0)
