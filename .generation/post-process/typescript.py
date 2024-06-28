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

# fixes due to https://github.com/OpenAPITools/openapi-generator/issues/14831
def layer_update_ts(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the LayerUpdate.ts file.'''
    for line in file_contents:
        dedented_line = dedent(line)

        if dedented_line.startswith('return { ...ProjectLayerFromJSONTyped(json, true)'):
            line = indent(dedent('''\
            if (instanceOfProjectLayer(json)) {
                return ProjectLayerFromJSONTyped(json, true);
            }
            if (instanceOfProjectUpdateToken(json)) {
                return ProjectUpdateTokenFromJSONTyped(json, true);
            }
            '''), INDENT)
        elif dedented_line.startswith('if (instanceOfProjectLayer(value))'):
            line = indent(dedent('''\
            if (typeof value === 'object' && instanceOfProjectLayer(value)) {
            '''), INDENT)

        yield line

# fixes due to https://github.com/OpenAPITools/openapi-generator/issues/14831
def plot_update_ts(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the PlotUpdate.ts file.'''
    for line in file_contents:
        dedented_line = dedent(line)

        if dedented_line.startswith('return { ...PlotFromJSONTyped(json, true)'):
            line = indent(dedent('''\
            if (instanceOfPlot(json)) {
                return PlotFromJSONTyped(json, true);
            }
            if (instanceOfProjectUpdateToken(json)) {
                return ProjectUpdateTokenFromJSONTyped(json, true);
            }
            '''), INDENT)
        elif dedented_line.startswith('if (instanceOfPlot(value))'):
            line = indent(dedent('''\
            if (typeof value === 'object' && instanceOfPlot(value)) {
            '''), INDENT)

        yield line

# fixes due to https://github.com/OpenAPITools/openapi-generator/issues/14831
def project_update_token_ts(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the ProjectUpdateToken.ts file.'''
    for line in file_contents:
        if line.startswith('export function ProjectUpdateTokenToJSON'):
            line = dedent('''\
            /**
             * Check if a given object implements the ProjectUpdateToken interface.
             */
            export function instanceOfProjectUpdateToken(value: any): boolean {
                return value === ProjectUpdateToken.None || value === ProjectUpdateToken.Delete;
            }
            ''') + '\n' + line

        yield line

# Fix: interface cannot inherit union type
def task_status_with_id_ts(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the TaskStatusWithId.ts file.'''
    for line in file_contents:
        dedented_line = dedent(line)

        if dedented_line.startswith('export interface TaskStatusWithId extends TaskStatus'):
            line = dedent('''\
            export type TaskStatusWithId = { taskId: string } & TaskStatus;
                          
            export interface _TaskStatusWithId /* extends TaskStatus */ {
            ''')

        yield line

def gitignore_ts(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the .gitignore file.'''
    for line in file_contents:
        if line.startswith('dist'):
            line = ''

        yield line


input_file = Path(sys.argv[1])

if input_file.name == 'LayerUpdate.ts':
    modify_file(input_file, layer_update_ts)
elif input_file.name == 'PlotUpdate.ts':
    modify_file(input_file, plot_update_ts)
elif input_file.name == 'ProjectUpdateToken.ts':
    modify_file(input_file, project_update_token_ts)
elif input_file.name == 'TaskStatusWithId.ts':
    modify_file(input_file, task_status_with_id_ts)
elif input_file.name == '.gitignore':
    modify_file(input_file, gitignore_ts)
else:
    pass # leave file untouched

exit(0)
