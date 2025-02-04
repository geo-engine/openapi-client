# coding: utf-8

"""
    Geo Engine API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.8.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import json
import pprint
import re  # noqa: F401
from aenum import Enum, no_arg





class GetCoverageFormat(str, Enum):
    """
    GetCoverageFormat
    """

    """
    allowed enum values
    """
    IMAGE_SLASH_TIFF = 'image/tiff'

    @classmethod
    def from_json(cls, json_str: str) -> GetCoverageFormat:
        """Create an instance of GetCoverageFormat from a JSON string"""
        return GetCoverageFormat(json.loads(json_str))


