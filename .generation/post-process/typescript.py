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

def runtime_ts(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the runtime.ts file.'''
    for line in file_contents:
        if line.startswith('export const DefaultConfig ='):
            line = dedent(f'''\
            export const DefaultConfig = new Configuration({{
                headers: {{
                    'User-Agent': 'geoengine/openapi-client/typescript/{version("typescript")}'
                }}
            }});
            ''')

        yield line

# Fix: interface cannot inherit union type
def task_status_with_id_ts(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the LayerUpdate.ts file.'''
    for line in file_contents:
        dedented_line = dedent(line)

        if dedented_line.startswith('export interface TaskStatusWithId extends TaskStatus'):
            line = dedent('''\
            export type TaskStatusWithId = { taskId: string } & TaskStatus;
                          
            export interface _TaskStatusWithId /* extends TaskStatus */ {
            ''')

        yield line


input_file = Path(sys.argv[1])

if input_file.name == 'runtime.ts':
    modify_file(input_file, runtime_ts)
elif input_file.name == 'TaskStatusWithId.ts':
    modify_file(input_file, task_status_with_id_ts)
else:
    pass # leave file untouched

exit(0)
