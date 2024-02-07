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





class TimeGranularity(str, Enum):
    """
    A time granularity.
    """

    """
    allowed enum values
    """
    MILLIS = 'millis'
    SECONDS = 'seconds'
    MINUTES = 'minutes'
    HOURS = 'hours'
    DAYS = 'days'
    MONTHS = 'months'
    YEARS = 'years'

    @classmethod
    def from_json(cls, json_str: str) -> TimeGranularity:
        """Create an instance of TimeGranularity from a JSON string"""
        return TimeGranularity(json.loads(json_str))


