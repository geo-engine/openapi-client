# coding: utf-8

"""
    Geo Engine API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.8.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import json
from enum import Enum
from typing_extensions import Self


class WcsVersion(str, Enum):
    """
    WcsVersion
    """

    """
    allowed enum values
    """
    ENUM_1_DOT_1_DOT_0 = '1.1.0'
    ENUM_1_DOT_1_DOT_1 = '1.1.1'

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Create an instance of WcsVersion from a JSON string"""
        return cls(json.loads(json_str))


