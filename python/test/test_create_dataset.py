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

from geoengine_openapi_client.models.create_dataset import CreateDataset

class TestCreateDataset(unittest.TestCase):
    """CreateDataset unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> CreateDataset:
        """Test CreateDataset
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `CreateDataset`
        """
        model = CreateDataset()
        if include_optional:
            return CreateDataset(
                data_path = None,
                definition = geoengine_openapi_client.models.dataset_definition.DatasetDefinition(
                    meta_data = null, 
                    properties = geoengine_openapi_client.models.add_dataset.AddDataset(
                        description = '', 
                        display_name = '', 
                        name = '', 
                        provenance = [
                            geoengine_openapi_client.models.provenance.Provenance(
                                citation = '', 
                                license = '', 
                                uri = '', )
                            ], 
                        source_operator = '', 
                        symbology = null, 
                        tags = [
                            ''
                            ], ), )
            )
        else:
            return CreateDataset(
                data_path = None,
                definition = geoengine_openapi_client.models.dataset_definition.DatasetDefinition(
                    meta_data = null, 
                    properties = geoengine_openapi_client.models.add_dataset.AddDataset(
                        description = '', 
                        display_name = '', 
                        name = '', 
                        provenance = [
                            geoengine_openapi_client.models.provenance.Provenance(
                                citation = '', 
                                license = '', 
                                uri = '', )
                            ], 
                        source_operator = '', 
                        symbology = null, 
                        tags = [
                            ''
                            ], ), ),
        )
        """

    def testCreateDataset(self):
        """Test CreateDataset"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
