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


from typing import Dict, List
from pydantic import BaseModel, Field, StrictInt, StrictStr, conlist, validator

class PaletteColorizer(BaseModel):
    """
    PaletteColorizer
    """
    colors: Dict[str, conlist(StrictInt, max_items=4, min_items=4)] = Field(..., description="A map from value to color  It is assumed that is has at least one and at most 256 entries.")
    default_color: conlist(StrictInt, max_items=4, min_items=4) = Field(..., alias="defaultColor")
    no_data_color: conlist(StrictInt, max_items=4, min_items=4) = Field(..., alias="noDataColor")
    type: StrictStr = Field(...)
    __properties = ["colors", "defaultColor", "noDataColor", "type"]

    @validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in ('palette'):
            raise ValueError("must be one of enum values ('palette')")
        return value

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
    def from_json(cls, json_str: str) -> PaletteColorizer:
        """Create an instance of PaletteColorizer from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # Note: fixed wrong handling of colors field
        return _dict

        # override the default output from pydantic by calling `to_dict()` of each value in colors (dict of array)
        _field_dict_of_array = {}
        if self.colors:
            for _key in self.colors:
                if self.colors[_key]:
                    _field_dict_of_array[_key] = [
                        _item.to_dict() for _item in self.colors[_key]
                    ]
            _dict['colors'] = _field_dict_of_array
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> PaletteColorizer:
        """Create an instance of PaletteColorizer from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return PaletteColorizer.parse_obj(obj)

        _obj = PaletteColorizer.parse_obj({
            "colors": obj.get("colors"),
            "default_color": obj.get("defaultColor"),
            "no_data_color": obj.get("noDataColor"),
            "type": obj.get("type")
        })
        return _obj


