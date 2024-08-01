# coding: utf-8

"""
    Geo Engine Pro API

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



from pydantic import BaseModel, Field, StrictStr
from geoengine_openapi_client.models.bounding_box2_d import BoundingBox2D
from geoengine_openapi_client.models.time_interval import TimeInterval

class STRectangle(BaseModel):
    """
    STRectangle
    """
    bounding_box: BoundingBox2D = Field(..., alias="boundingBox")
    spatial_reference: StrictStr = Field(..., alias="spatialReference")
    time_interval: TimeInterval = Field(..., alias="timeInterval")
    __properties = ["boundingBox", "spatialReference", "timeInterval"]

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
    def from_json(cls, json_str: str) -> STRectangle:
        """Create an instance of STRectangle from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of bounding_box
        if self.bounding_box:
            _dict['boundingBox'] = self.bounding_box.to_dict()
        # override the default output from pydantic by calling `to_dict()` of time_interval
        if self.time_interval:
            _dict['timeInterval'] = self.time_interval.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> STRectangle:
        """Create an instance of STRectangle from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return STRectangle.parse_obj(obj)

        _obj = STRectangle.parse_obj({
            "bounding_box": BoundingBox2D.from_dict(obj.get("boundingBox")) if obj.get("boundingBox") is not None else None,
            "spatial_reference": obj.get("spatialReference"),
            "time_interval": TimeInterval.from_dict(obj.get("timeInterval")) if obj.get("timeInterval") is not None else None
        })
        return _obj


