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

from pydantic import BaseModel, ConfigDict, Field, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from geoengine_openapi_client.models.format_specifics import FormatSpecifics
from typing import Optional, Set
from typing_extensions import Self

class OgrSourceColumnSpec(BaseModel):
    """
    OgrSourceColumnSpec
    """ # noqa: E501
    bool: Optional[List[StrictStr]] = None
    datetime: Optional[List[StrictStr]] = None
    var_float: Optional[List[StrictStr]] = Field(default=None, alias="float")
    format_specifics: Optional[FormatSpecifics] = Field(default=None, alias="formatSpecifics")
    int: Optional[List[StrictStr]] = None
    rename: Optional[Dict[str, StrictStr]] = None
    text: Optional[List[StrictStr]] = None
    x: StrictStr
    y: Optional[StrictStr] = None
    __properties: ClassVar[List[str]] = ["bool", "datetime", "float", "formatSpecifics", "int", "rename", "text", "x", "y"]

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
        """Create an instance of OgrSourceColumnSpec from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of format_specifics
        if self.format_specifics:
            _dict['formatSpecifics'] = self.format_specifics.to_dict()
        # set to None if format_specifics (nullable) is None
        # and model_fields_set contains the field
        if self.format_specifics is None and "format_specifics" in self.model_fields_set:
            _dict['formatSpecifics'] = None

        # set to None if rename (nullable) is None
        # and model_fields_set contains the field
        if self.rename is None and "rename" in self.model_fields_set:
            _dict['rename'] = None

        # set to None if y (nullable) is None
        # and model_fields_set contains the field
        if self.y is None and "y" in self.model_fields_set:
            _dict['y'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of OgrSourceColumnSpec from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "bool": obj.get("bool"),
            "datetime": obj.get("datetime"),
            "float": obj.get("float"),
            "formatSpecifics": FormatSpecifics.from_dict(obj["formatSpecifics"]) if obj.get("formatSpecifics") is not None else None,
            "int": obj.get("int"),
            "rename": obj.get("rename"),
            "text": obj.get("text"),
            "x": obj.get("x"),
            "y": obj.get("y")
        })
        return _obj


