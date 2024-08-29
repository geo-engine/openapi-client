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
from inspect import getfullargspec
import json
import pprint
import re  # noqa: F401

from typing import Any, List, Optional
from pydantic import BaseModel, Field, StrictStr, ValidationError, validator
from geoengine_openapi_client.models.derived_number import DerivedNumber
from geoengine_openapi_client.models.static_number_param import StaticNumberParam
from typing import Union, Any, List, TYPE_CHECKING
from pydantic import StrictStr, Field

NUMBERPARAM_ONE_OF_SCHEMAS = ["DerivedNumber", "StaticNumberParam"]

class NumberParam(BaseModel):
    """
    NumberParam
    """
    # data type: StaticNumberParam
    oneof_schema_1_validator: Optional[StaticNumberParam] = None
    # data type: DerivedNumber
    oneof_schema_2_validator: Optional[DerivedNumber] = None
    if TYPE_CHECKING:
        actual_instance: Union[DerivedNumber, StaticNumberParam]
    else:
        actual_instance: Any
    one_of_schemas: List[str] = Field(NUMBERPARAM_ONE_OF_SCHEMAS, const=True)

    class Config:
        validate_assignment = True

    discriminator_value_class_map = {
    }

    def __init__(self, *args, **kwargs) -> None:
        if args:
            if len(args) > 1:
                raise ValueError("If a position argument is used, only 1 is allowed to set `actual_instance`")
            if kwargs:
                raise ValueError("If a position argument is used, keyword arguments cannot be used.")
            super().__init__(actual_instance=args[0])
        else:
            super().__init__(**kwargs)

    @validator('actual_instance')
    def actual_instance_must_validate_oneof(cls, v):
        instance = NumberParam.construct()
        error_messages = []
        match = 0
        # validate data type: StaticNumberParam
        if not isinstance(v, StaticNumberParam):
            error_messages.append(f"Error! Input type `{type(v)}` is not `StaticNumberParam`")
        else:
            match += 1
        # validate data type: DerivedNumber
        if not isinstance(v, DerivedNumber):
            error_messages.append(f"Error! Input type `{type(v)}` is not `DerivedNumber`")
        else:
            match += 1
        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when setting `actual_instance` in NumberParam with oneOf schemas: DerivedNumber, StaticNumberParam. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when setting `actual_instance` in NumberParam with oneOf schemas: DerivedNumber, StaticNumberParam. Details: " + ", ".join(error_messages))
        else:
            return v

    @classmethod
    def from_dict(cls, obj: dict) -> NumberParam:
        return cls.from_json(json.dumps(obj))

    @classmethod
    def from_json(cls, json_str: str) -> NumberParam:
        """Returns the object represented by the json string"""
        instance = NumberParam.construct()
        error_messages = []
        match = 0

        # use oneOf discriminator to lookup the data type
        _data_type = json.loads(json_str).get("type")
        if not _data_type:
            raise ValueError("Failed to lookup data type from the field `type` in the input.")

        # check if data type is `DerivedNumber`
        if _data_type == "DerivedNumber":
            instance.actual_instance = DerivedNumber.from_json(json_str)
            return instance

        # check if data type is `StaticNumberParam`
        if _data_type == "StaticNumberParam":
            instance.actual_instance = StaticNumberParam.from_json(json_str)
            return instance

        # check if data type is `DerivedNumber`
        if _data_type == "derived":
            instance.actual_instance = DerivedNumber.from_json(json_str)
            return instance

        # check if data type is `StaticNumberParam`
        if _data_type == "static":
            instance.actual_instance = StaticNumberParam.from_json(json_str)
            return instance

        # deserialize data into StaticNumberParam
        try:
            instance.actual_instance = StaticNumberParam.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into DerivedNumber
        try:
            instance.actual_instance = DerivedNumber.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when deserializing the JSON string into NumberParam with oneOf schemas: DerivedNumber, StaticNumberParam. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when deserializing the JSON string into NumberParam with oneOf schemas: DerivedNumber, StaticNumberParam. Details: " + ", ".join(error_messages))
        else:
            return instance

    def to_json(self) -> str:
        """Returns the JSON representation of the actual instance"""
        if self.actual_instance is None:
            return "null"

        to_json = getattr(self.actual_instance, "to_json", None)
        if callable(to_json):
            return self.actual_instance.to_json()
        else:
            return json.dumps(self.actual_instance)

    def to_dict(self) -> dict:
        """Returns the dict representation of the actual instance"""
        if self.actual_instance is None:
            return None

        to_dict = getattr(self.actual_instance, "to_dict", None)
        if callable(to_dict):
            return self.actual_instance.to_dict()
        else:
            # primitive type
            return self.actual_instance

    def to_str(self) -> str:
        """Returns the string representation of the actual instance"""
        return pprint.pformat(self.dict())


