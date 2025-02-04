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
import pprint
import re  # noqa: F401
import json


from typing import List
from pydantic import BaseModel, Field, conlist
from geoengine_openapi_client.models.coordinate2_d import Coordinate2D

class MockDatasetDataSourceLoadingInfo(BaseModel):
    """
    MockDatasetDataSourceLoadingInfo
    """
    points: conlist(Coordinate2D) = Field(...)
    __properties = ["points"]

    class Config:
        """Pydantic configuration"""
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> MockDatasetDataSourceLoadingInfo:
        """Create an instance of MockDatasetDataSourceLoadingInfo from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of each item in points (list)
        _items = []
        if self.points:
            for _item in self.points:
                if _item:
                    _items.append(_item.to_dict())
            _dict['points'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> MockDatasetDataSourceLoadingInfo:
        """Create an instance of MockDatasetDataSourceLoadingInfo from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return MockDatasetDataSourceLoadingInfo.parse_obj(obj)

        _obj = MockDatasetDataSourceLoadingInfo.parse_obj({
            "points": [Coordinate2D.from_dict(_item) for _item in obj.get("points")] if obj.get("points") is not None else None
        })
        return _obj


