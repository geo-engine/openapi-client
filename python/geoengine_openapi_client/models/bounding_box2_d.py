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



from pydantic import BaseModel, Field
from geoengine_openapi_client.models.coordinate2_d import Coordinate2D

class BoundingBox2D(BaseModel):
    """
    A bounding box that includes all border points. Note: may degenerate to a point!  # noqa: E501
    """
    lower_left_coordinate: Coordinate2D = Field(..., alias="lowerLeftCoordinate")
    upper_right_coordinate: Coordinate2D = Field(..., alias="upperRightCoordinate")
    __properties = ["lowerLeftCoordinate", "upperRightCoordinate"]

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
    def from_json(cls, json_str: str) -> BoundingBox2D:
        """Create an instance of BoundingBox2D from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of lower_left_coordinate
        if self.lower_left_coordinate:
            _dict['lowerLeftCoordinate'] = self.lower_left_coordinate.to_dict()
        # override the default output from pydantic by calling `to_dict()` of upper_right_coordinate
        if self.upper_right_coordinate:
            _dict['upperRightCoordinate'] = self.upper_right_coordinate.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> BoundingBox2D:
        """Create an instance of BoundingBox2D from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return BoundingBox2D.parse_obj(obj)

        _obj = BoundingBox2D.parse_obj({
            "lower_left_coordinate": Coordinate2D.from_dict(obj.get("lowerLeftCoordinate")) if obj.get("lowerLeftCoordinate") is not None else None,
            "upper_right_coordinate": Coordinate2D.from_dict(obj.get("upperRightCoordinate")) if obj.get("upperRightCoordinate") is not None else None
        })
        return _obj


