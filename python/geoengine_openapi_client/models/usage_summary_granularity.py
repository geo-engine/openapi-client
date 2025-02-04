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





class UsageSummaryGranularity(str, Enum):
    """
    UsageSummaryGranularity
    """

    """
    allowed enum values
    """
    MINUTES = 'minutes'
    HOURS = 'hours'
    DAYS = 'days'
    MONTHS = 'months'
    YEARS = 'years'

    @classmethod
    def from_json(cls, json_str: str) -> UsageSummaryGranularity:
        """Create an instance of UsageSummaryGranularity from a JSON string"""
        return UsageSummaryGranularity(json.loads(json_str))


