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
import json
import pprint
from pydantic import BaseModel, ConfigDict, Field, StrictStr, ValidationError, field_validator
from typing import Any, List, Optional
from geoengine_openapi_client.models.resource_dataset import ResourceDataset
from geoengine_openapi_client.models.resource_layer import ResourceLayer
from geoengine_openapi_client.models.resource_layer_collection import ResourceLayerCollection
from geoengine_openapi_client.models.resource_project import ResourceProject
from pydantic import StrictStr, Field
from typing import Union, List, Optional, Dict
from typing_extensions import Literal, Self

RESOURCE_ONE_OF_SCHEMAS = ["ResourceDataset", "ResourceLayer", "ResourceLayerCollection", "ResourceProject"]

class Resource(BaseModel):
    """
    Resource
    """
    # data type: ResourceLayer
    oneof_schema_1_validator: Optional[ResourceLayer] = None
    # data type: ResourceLayerCollection
    oneof_schema_2_validator: Optional[ResourceLayerCollection] = None
    # data type: ResourceProject
    oneof_schema_3_validator: Optional[ResourceProject] = None
    # data type: ResourceDataset
    oneof_schema_4_validator: Optional[ResourceDataset] = None
    actual_instance: Optional[Union[ResourceDataset, ResourceLayer, ResourceLayerCollection, ResourceProject]] = None
    one_of_schemas: List[str] = Field(default=Literal["ResourceDataset", "ResourceLayer", "ResourceLayerCollection", "ResourceProject"])

    model_config = ConfigDict(
        validate_assignment=True,
        protected_namespaces=(),
    )


    discriminator_value_class_map: Dict[str, str] = {
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

    @field_validator('actual_instance')
    def actual_instance_must_validate_oneof(cls, v):
        instance = Resource.model_construct()
        error_messages = []
        match = 0
        # validate data type: ResourceLayer
        if not isinstance(v, ResourceLayer):
            error_messages.append(f"Error! Input type `{type(v)}` is not `ResourceLayer`")
        else:
            match += 1
        # validate data type: ResourceLayerCollection
        if not isinstance(v, ResourceLayerCollection):
            error_messages.append(f"Error! Input type `{type(v)}` is not `ResourceLayerCollection`")
        else:
            match += 1
        # validate data type: ResourceProject
        if not isinstance(v, ResourceProject):
            error_messages.append(f"Error! Input type `{type(v)}` is not `ResourceProject`")
        else:
            match += 1
        # validate data type: ResourceDataset
        if not isinstance(v, ResourceDataset):
            error_messages.append(f"Error! Input type `{type(v)}` is not `ResourceDataset`")
        else:
            match += 1
        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when setting `actual_instance` in Resource with oneOf schemas: ResourceDataset, ResourceLayer, ResourceLayerCollection, ResourceProject. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when setting `actual_instance` in Resource with oneOf schemas: ResourceDataset, ResourceLayer, ResourceLayerCollection, ResourceProject. Details: " + ", ".join(error_messages))
        else:
            return v

    @classmethod
    def from_dict(cls, obj: Union[str, Dict[str, Any]]) -> Self:
        return cls.from_json(json.dumps(obj))

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Returns the object represented by the json string"""
        instance = cls.model_construct()
        error_messages = []
        match = 0

        # use oneOf discriminator to lookup the data type
        _data_type = json.loads(json_str).get("type")
        if not _data_type:
            raise ValueError("Failed to lookup data type from the field `type` in the input.")

        # check if data type is `ResourceDataset`
        if _data_type == "dataset":
            instance.actual_instance = ResourceDataset.from_json(json_str)
            return instance

        # check if data type is `ResourceLayer`
        if _data_type == "layer":
            instance.actual_instance = ResourceLayer.from_json(json_str)
            return instance

        # check if data type is `ResourceLayerCollection`
        if _data_type == "layerCollection":
            instance.actual_instance = ResourceLayerCollection.from_json(json_str)
            return instance

        # check if data type is `ResourceProject`
        if _data_type == "project":
            instance.actual_instance = ResourceProject.from_json(json_str)
            return instance

        # check if data type is `ResourceDataset`
        if _data_type == "ResourceDataset":
            instance.actual_instance = ResourceDataset.from_json(json_str)
            return instance

        # check if data type is `ResourceLayer`
        if _data_type == "ResourceLayer":
            instance.actual_instance = ResourceLayer.from_json(json_str)
            return instance

        # check if data type is `ResourceLayerCollection`
        if _data_type == "ResourceLayerCollection":
            instance.actual_instance = ResourceLayerCollection.from_json(json_str)
            return instance

        # check if data type is `ResourceProject`
        if _data_type == "ResourceProject":
            instance.actual_instance = ResourceProject.from_json(json_str)
            return instance

        # deserialize data into ResourceLayer
        try:
            instance.actual_instance = ResourceLayer.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into ResourceLayerCollection
        try:
            instance.actual_instance = ResourceLayerCollection.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into ResourceProject
        try:
            instance.actual_instance = ResourceProject.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into ResourceDataset
        try:
            instance.actual_instance = ResourceDataset.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when deserializing the JSON string into Resource with oneOf schemas: ResourceDataset, ResourceLayer, ResourceLayerCollection, ResourceProject. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when deserializing the JSON string into Resource with oneOf schemas: ResourceDataset, ResourceLayer, ResourceLayerCollection, ResourceProject. Details: " + ", ".join(error_messages))
        else:
            return instance

    def to_json(self) -> str:
        """Returns the JSON representation of the actual instance"""
        if self.actual_instance is None:
            return "null"

        if hasattr(self.actual_instance, "to_json") and callable(self.actual_instance.to_json):
            return self.actual_instance.to_json()
        else:
            return json.dumps(self.actual_instance)

    def to_dict(self) -> Optional[Union[Dict[str, Any], ResourceDataset, ResourceLayer, ResourceLayerCollection, ResourceProject]]:
        """Returns the dict representation of the actual instance"""
        if self.actual_instance is None:
            return None

        if hasattr(self.actual_instance, "to_dict") and callable(self.actual_instance.to_dict):
            return self.actual_instance.to_dict()
        else:
            # primitive type
            return self.actual_instance

    def to_str(self) -> str:
        """Returns the string representation of the actual instance"""
        return pprint.pformat(self.model_dump())


