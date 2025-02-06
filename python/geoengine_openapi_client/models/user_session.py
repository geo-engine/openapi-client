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
from pydantic import BaseModel, ConfigDict, Field, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from geoengine_openapi_client.models.st_rectangle import STRectangle
from geoengine_openapi_client.models.user_info import UserInfo
from typing import Optional, Set
from typing_extensions import Self

class UserSession(BaseModel):
    """
    UserSession
    """ # noqa: E501
    created: datetime
    id: StrictStr
    project: Optional[StrictStr] = None
    roles: List[StrictStr]
    user: UserInfo
    valid_until: datetime = Field(alias="validUntil")
    view: Optional[STRectangle] = None
    __properties: ClassVar[List[str]] = ["created", "id", "project", "roles", "user", "validUntil", "view"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of UserSession from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of user
        if self.user:
            _dict['user'] = self.user.to_dict()
        # override the default output from pydantic by calling `to_dict()` of view
        if self.view:
            _dict['view'] = self.view.to_dict()
        # set to None if view (nullable) is None
        # and model_fields_set contains the field
        if self.view is None and "view" in self.model_fields_set:
            _dict['view'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of UserSession from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "created": obj.get("created"),
            "id": obj.get("id"),
            "project": obj.get("project"),
            "roles": obj.get("roles"),
            "user": UserInfo.from_dict(obj["user"]) if obj.get("user") is not None else None,
            "validUntil": obj.get("validUntil"),
            "view": STRectangle.from_dict(obj["view"]) if obj.get("view") is not None else None
        })
        return _obj


