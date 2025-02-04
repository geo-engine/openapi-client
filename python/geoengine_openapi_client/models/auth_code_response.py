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

class AuthCodeResponse(BaseModel):
    """
    AuthCodeResponse
    """
    code: StrictStr = Field(...)
    session_state: StrictStr = Field(..., alias="sessionState")
    state: StrictStr = Field(...)
    __properties = ["code", "sessionState", "state"]

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
    def from_json(cls, json_str: str) -> AuthCodeResponse:
        """Create an instance of AuthCodeResponse from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> AuthCodeResponse:
        """Create an instance of AuthCodeResponse from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return AuthCodeResponse.parse_obj(obj)

        _obj = AuthCodeResponse.parse_obj({
            "code": obj.get("code"),
            "session_state": obj.get("sessionState"),
            "state": obj.get("state")
        })
        return _obj


