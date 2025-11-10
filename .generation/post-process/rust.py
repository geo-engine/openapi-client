#!/bin/python3

'''
Post-processing of generated code.
'''

import sys
from pathlib import Path
from typing import Generator, List
from textwrap import dedent, indent
from util import modify_file

INDENT = '    '

def spatial_resolution_rs(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the spatial_resolution.rs file.'''
    for line in file_contents:
        yield line

    yield dedent('''\
        impl std::fmt::Display for SpatialResolution {
            fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
                write!(f, "{},{}", self.x, self.y)
            }
        }
        ''')

def spatial_partition2_d_rs(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the SpatialPartition2D.rs file.'''
    for line in file_contents:
        yield line

    yield dedent('''\
        impl std::fmt::Display for SpatialPartition2D {
            fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
                write!(
                    f,
                    "{xmin},{ymin},{xmax},{ymax}",
                    xmin = self.upper_left_coordinate.x,
                    ymin = self.lower_right_coordinate.y,
                    xmax = self.lower_right_coordinate.x,
                    ymax = self.upper_left_coordinate.y
                )
            }
        }
        ''')

def uploads_api_rs(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the uploads_api.rs file.'''
    for line in file_contents:
        dedented_line = dedent(line)

        if dedented_line.startswith('let p_form_files_left_square_bracket_right_square_bracket'):
            line = indent('let _p_form_files_left_square_bracket_right_square_bracket = \
                          files_left_square_bracket_right_square_bracket;', INDENT)
        elif dedented_line.startswith('let mut multipart_form'):
            line = indent("let multipart_form = reqwest::multipart::Form::new();", INDENT)

        yield line

def tasks_api_rs(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the tasks_api.rs file.'''
    for line in file_contents:
        dedented_line = dedent(line)

        if dedented_line.startswith('let uri_str = format!("{}/tasks/list"'):
            line = indent('''\
                let uri_str = format!(
                    "{}/tasks/list?filter={}&offset={}&limit={}",
                    configuration.base_path,
                    p_path_filter.unwrap().to_string(),
                    p_path_offset,
                    p_path_limit
                );
            ''', INDENT)

        yield line


def projects_api_rs(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the projects_api.rs file.'''
    for line in file_contents:
        dedented_line = dedent(line)

        if dedented_line.startswith('let uri_str = format!("{}/projects"'):
            line = indent('''\
                let uri_str = format!(
                    "{}/projects?order={}&offset={}&limit={}",
                    configuration.base_path,
                    p_path_order.to_string(),
                    p_path_offset,
                    p_path_limit
                );
            ''', INDENT)

        yield line

def ogcwms_api_rs(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the ogcwms_api.rs file.'''
    for line in file_contents:
        dedented_line = dedent(line)

        if dedented_line.startswith(
            'let uri_str = format!("{}/wms/{workflow}?request=GetLegendGraphic"'):
            line = indent('''\
                let uri_str = format!(
                    "{}/wms/{workflow}?request={request}&version={version}&service={service}&layer={layer}",
                    configuration.base_path,
                    workflow = crate::apis::urlencode(p_path_workflow),
                    version = p_path_version.to_string(),
                    service = p_path_service.to_string(),
                    request = p_path_request.to_string(),
                    layer = crate::apis::urlencode(p_path_layer)
                );
            ''', INDENT)
        elif dedented_line.startswith(
            'let uri_str = format!("{}/wms/{workflow}?request=GetCapabilities"'):
            line = indent('''\
                let uri_str = format!(
                    "{}/wms/{workflow}?request={request}&service={service}&version={version}&format={format}",
                    configuration.base_path,
                    workflow = crate::apis::urlencode(p_path_workflow),
                    version = p_path_version.unwrap().to_string(),
                    service = p_path_service.to_string(),
                    request = p_path_request.to_string(),
                    format = p_path_format.unwrap().to_string()
                );
            ''', INDENT)

        yield line

def ogcwfs_api_rs(file_contents: List[str]) -> Generator[str, None, None]:
    '''Modify the ogcwfs_api.rs file.'''
    for line in file_contents:
        dedented_line = dedent(line)

        if dedented_line.startswith(
            'let uri_str = format!("{}/wfs/{workflow}?request=GetCapabilities'):
            line = indent('''\
                let uri_str = format!(
                "{}/wfs/{workflow}?request={request}&service={service}&version={version}",
                configuration.base_path,
                workflow = crate::apis::urlencode(p_path_workflow),
                version = p_path_version.unwrap().to_string(),
                service = p_path_service.to_string(),
                request = p_path_request.to_string()
            );
            ''', INDENT)

        yield line


input_file = Path(sys.argv[1])

file_modifications = {
    'ogcwfs_api.rs': ogcwfs_api_rs,
    'ogcwms_api.rs': ogcwms_api_rs,
    'projects_api.rs': projects_api_rs,
    'spatial_partition2_d.rs': spatial_partition2_d_rs,
    'spatial_resolution.rs': spatial_resolution_rs,
    'tasks_api.rs': tasks_api_rs,
    'uploads_api.rs': uploads_api_rs,
}
if modifier_function := file_modifications.get(input_file.name):
    modify_file(input_file, modifier_function)
else:
    pass # leave file untouched

exit(0)
