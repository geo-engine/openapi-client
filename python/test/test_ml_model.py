# coding: utf-8

"""
    Geo Engine API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.8.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from geoengine_openapi_client.models.ml_model import MlModel

class TestMlModel(unittest.TestCase):
    """MlModel unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> MlModel:
        """Test MlModel
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `MlModel`
        """
        model = MlModel()
        if include_optional:
            return MlModel(
                description = '',
                display_name = '',
                file_name = '',
                metadata = geoengine_openapi_client.models.ml_model_metadata.MlModelMetadata(
                    input_no_data_handling = geoengine_openapi_client.models.ml_model_input_no_data_handling.MlModelInputNoDataHandling(
                        no_data_value = 1.337, 
                        variant = 'encodedNoData', ), 
                    input_shape = geoengine_openapi_client.models.ml_tensor_shape3_d.MlTensorShape3D(
                        bands = 0, 
                        x = 0, 
                        y = 0, ), 
                    input_type = 'U8', 
                    output_no_data_handling = geoengine_openapi_client.models.ml_model_output_no_data_handling.MlModelOutputNoDataHandling(
                        no_data_value = 1.337, 
                        variant = 'encodedNoData', ), 
                    output_shape = geoengine_openapi_client.models.ml_tensor_shape3_d.MlTensorShape3D(
                        bands = 0, 
                        x = 0, 
                        y = 0, ), 
                    output_type = 'U8', ),
                name = '',
                upload = ''
            )
        else:
            return MlModel(
                description = '',
                display_name = '',
                file_name = '',
                metadata = geoengine_openapi_client.models.ml_model_metadata.MlModelMetadata(
                    input_no_data_handling = geoengine_openapi_client.models.ml_model_input_no_data_handling.MlModelInputNoDataHandling(
                        no_data_value = 1.337, 
                        variant = 'encodedNoData', ), 
                    input_shape = geoengine_openapi_client.models.ml_tensor_shape3_d.MlTensorShape3D(
                        bands = 0, 
                        x = 0, 
                        y = 0, ), 
                    input_type = 'U8', 
                    output_no_data_handling = geoengine_openapi_client.models.ml_model_output_no_data_handling.MlModelOutputNoDataHandling(
                        no_data_value = 1.337, 
                        variant = 'encodedNoData', ), 
                    output_shape = geoengine_openapi_client.models.ml_tensor_shape3_d.MlTensorShape3D(
                        bands = 0, 
                        x = 0, 
                        y = 0, ), 
                    output_type = 'U8', ),
                name = '',
                upload = '',
        )
        """

    def testMlModel(self):
        """Test MlModel"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
