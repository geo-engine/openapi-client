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
from geoengine_openapi_client.models.linear_gradient import LinearGradient
from geoengine_openapi_client.models.logarithmic_gradient import LogarithmicGradient
from geoengine_openapi_client.models.palette_colorizer import PaletteColorizer
from typing import Union, Any, List, TYPE_CHECKING
from pydantic import StrictStr, Field

COLORIZER_ONE_OF_SCHEMAS = ["LinearGradient", "LogarithmicGradient", "PaletteColorizer"]

class Colorizer(BaseModel):
    """
    Colorizer
    """
    # data type: LinearGradient
    oneof_schema_1_validator: Optional[LinearGradient] = None
    # data type: LogarithmicGradient
    oneof_schema_2_validator: Optional[LogarithmicGradient] = None
    # data type: PaletteColorizer
    oneof_schema_3_validator: Optional[PaletteColorizer] = None
    if TYPE_CHECKING:
        actual_instance: Union[LinearGradient, LogarithmicGradient, PaletteColorizer]
    else:
        actual_instance: Any
    one_of_schemas: List[str] = Field(COLORIZER_ONE_OF_SCHEMAS, const=True)

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
        instance = Colorizer.construct()
        error_messages = []
        match = 0
        # validate data type: LinearGradient
        if not isinstance(v, LinearGradient):
            error_messages.append(f"Error! Input type `{type(v)}` is not `LinearGradient`")
        else:
            match += 1
        # validate data type: LogarithmicGradient
        if not isinstance(v, LogarithmicGradient):
            error_messages.append(f"Error! Input type `{type(v)}` is not `LogarithmicGradient`")
        else:
            match += 1
        # validate data type: PaletteColorizer
        if not isinstance(v, PaletteColorizer):
            error_messages.append(f"Error! Input type `{type(v)}` is not `PaletteColorizer`")
        else:
            match += 1
        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when setting `actual_instance` in Colorizer with oneOf schemas: LinearGradient, LogarithmicGradient, PaletteColorizer. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when setting `actual_instance` in Colorizer with oneOf schemas: LinearGradient, LogarithmicGradient, PaletteColorizer. Details: " + ", ".join(error_messages))
        else:
            return v

    @classmethod
    def from_dict(cls, obj: dict) -> Colorizer:
        return cls.from_json(json.dumps(obj))

    @classmethod
    def from_json(cls, json_str: str) -> Colorizer:
        """Returns the object represented by the json string"""
        instance = Colorizer.construct()
        error_messages = []
        match = 0

        # use oneOf discriminator to lookup the data type
        _data_type = json.loads(json_str).get("type")
        if not _data_type:
            raise ValueError("Failed to lookup data type from the field `type` in the input.")

        # check if data type is `LinearGradient`
        if _data_type == "LinearGradient":
            instance.actual_instance = LinearGradient.from_json(json_str)
            return instance

        # check if data type is `LogarithmicGradient`
        if _data_type == "LogarithmicGradient":
            instance.actual_instance = LogarithmicGradient.from_json(json_str)
            return instance

        # check if data type is `PaletteColorizer`
        if _data_type == "PaletteColorizer":
            instance.actual_instance = PaletteColorizer.from_json(json_str)
            return instance

        # check if data type is `LinearGradient`
        if _data_type == "linearGradient":
            instance.actual_instance = LinearGradient.from_json(json_str)
            return instance

        # check if data type is `LogarithmicGradient`
        if _data_type == "logarithmicGradient":
            instance.actual_instance = LogarithmicGradient.from_json(json_str)
            return instance

        # check if data type is `PaletteColorizer`
        if _data_type == "palette":
            instance.actual_instance = PaletteColorizer.from_json(json_str)
            return instance

        # deserialize data into LinearGradient
        try:
            instance.actual_instance = LinearGradient.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into LogarithmicGradient
        try:
            instance.actual_instance = LogarithmicGradient.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into PaletteColorizer
        try:
            instance.actual_instance = PaletteColorizer.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when deserializing the JSON string into Colorizer with oneOf schemas: LinearGradient, LogarithmicGradient, PaletteColorizer. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when deserializing the JSON string into Colorizer with oneOf schemas: LinearGradient, LogarithmicGradient, PaletteColorizer. Details: " + ", ".join(error_messages))
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


