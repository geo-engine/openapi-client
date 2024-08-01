# coding: utf-8

"""
    Geo Engine Pro API

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





class GetMapFormat(str, Enum):
    """
    GetMapFormat
    """

    """
    allowed enum values
    """
    IMAGE_SLASH_PNG = 'image/png'

    @classmethod
    def from_json(cls, json_str: str) -> GetMapFormat:
        """Create an instance of GetMapFormat from a JSON string"""
        return GetMapFormat(json.loads(json_str))


