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



from pydantic import BaseModel, Field, StrictStr
from geoengine_openapi_client.models.layer_visibility import LayerVisibility
from geoengine_openapi_client.models.symbology import Symbology

class ProjectLayer(BaseModel):
    """
    ProjectLayer
    """
    name: StrictStr = Field(...)
    symbology: Symbology = Field(...)
    visibility: LayerVisibility = Field(...)
    workflow: StrictStr = Field(...)
    __properties = ["name", "symbology", "visibility", "workflow"]

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
    def from_json(cls, json_str: str) -> ProjectLayer:
        """Create an instance of ProjectLayer from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of symbology
        if self.symbology:
            _dict['symbology'] = self.symbology.to_dict()
        # override the default output from pydantic by calling `to_dict()` of visibility
        if self.visibility:
            _dict['visibility'] = self.visibility.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> ProjectLayer:
        """Create an instance of ProjectLayer from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return ProjectLayer.parse_obj(obj)

        _obj = ProjectLayer.parse_obj({
            "name": obj.get("name"),
            "symbology": Symbology.from_dict(obj.get("symbology")) if obj.get("symbology") is not None else None,
            "visibility": LayerVisibility.from_dict(obj.get("visibility")) if obj.get("visibility") is not None else None,
            "workflow": obj.get("workflow")
        })
        return _obj


