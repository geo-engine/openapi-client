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

from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, Field, StrictStr, conlist
from geoengine_openapi_client.models.st_rectangle import STRectangle
from geoengine_openapi_client.models.user_info import UserInfo

class UserSession(BaseModel):
    """
    UserSession
    """
    created: datetime = Field(...)
    id: StrictStr = Field(...)
    project: Optional[StrictStr] = None
    roles: conlist(StrictStr) = Field(...)
    user: UserInfo = Field(...)
    valid_until: datetime = Field(..., alias="validUntil")
    view: Optional[STRectangle] = None
    __properties = ["created", "id", "project", "roles", "user", "validUntil", "view"]

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
    def from_json(cls, json_str: str) -> UserSession:
        """Create an instance of UserSession from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of user
        if self.user:
            _dict['user'] = self.user.to_dict()
        # override the default output from pydantic by calling `to_dict()` of view
        if self.view:
            _dict['view'] = self.view.to_dict()
        # set to None if project (nullable) is None
        # and __fields_set__ contains the field
        if self.project is None and "project" in self.__fields_set__:
            _dict['project'] = None

        # set to None if view (nullable) is None
        # and __fields_set__ contains the field
        if self.view is None and "view" in self.__fields_set__:
            _dict['view'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> UserSession:
        """Create an instance of UserSession from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return UserSession.parse_obj(obj)

        _obj = UserSession.parse_obj({
            "created": obj.get("created"),
            "id": obj.get("id"),
            "project": obj.get("project"),
            "roles": obj.get("roles"),
            "user": UserInfo.from_dict(obj.get("user")) if obj.get("user") is not None else None,
            "valid_until": obj.get("validUntil"),
            "view": STRectangle.from_dict(obj.get("view")) if obj.get("view") is not None else None
        })
        return _obj


