#!/bin/python3

'''
Post-processing of generated code.
'''

import sys
from pathlib import Path
from typing import Generator, List
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

        elif dedented_line.startswith('config = self.configuration'):
            line = indent(dedent('''\
            # Note: remove query string in path part for ogc endpoints
            resource_path = resource_path.partition("?")[0]'''),
            2 * INDENT) + '\n\n' + line

        elif dedented_line.startswith('msg = "RESTResponse.read() must be called before passing it to response_deserialize()"'):
            line = indent(dedent('''\
            # RESTResponse.read() must be called before passing it to response_deserialize()
            '''), 2 * INDENT)

        elif dedented_line.startswith('assert response_data.data is not None, msg'):
            line = indent(dedent('''\
            # Note: fixed handling of empty responses
            if response_data.data is None:
                return ApiResponse(
                    status_code = response_data.status,
                    data = None,
                    headers = response_data.getheaders(),
                    raw_data=None
                )
            '''), 2 * INDENT)

        yield line

def api_response_py(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the api_response.py file.'''
    for line in file_contents:
        dedented_line = dedent(line)

        if dedented_line.startswith('data: T'):
            yield line.replace('data: T', 'data: Optional[T]')

        elif dedented_line.startswith('raw_data: StrictBytes'):
            yield line.replace('raw_data: StrictBytes', 'raw_data: Optional[StrictBytes]')

        else:
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

def raster_dataset_from_workflow_py(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the raster_dataset_from_workflow.py file.'''
    for line in file_contents:
        if dedent(line).startswith('exclude_none=True'):
            line = indent(dedent('''\
            exclude_none=True,
            # Note: remove as_cog when set to default
            exclude_defaults=True
            '''), 3 * INDENT)

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


input_file = Path(sys.argv[1])

if input_file.name == 'api_client.py':
    modify_file(input_file, api_client_py)
elif input_file.name == 'api_response.py':
    modify_file(input_file, api_response_py)
elif input_file.name == 'exceptions.py':
    modify_file(input_file, exceptions_py)
elif input_file.name == 'raster_dataset_from_workflow.py':
    modify_file(input_file, raster_dataset_from_workflow_py)
elif input_file.name == 'task_status_with_id.py':
    modify_file(input_file, task_status_with_id_py)
else:
    pass # leave file untouched

exit(0)
