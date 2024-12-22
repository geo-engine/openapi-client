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
import datetime

from geoengine_openapi_client.models.dataset import Dataset  # noqa: E501

class TestDataset(unittest.TestCase):
    """Dataset unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> Dataset:
        """Test Dataset
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `Dataset`
        """
        model = Dataset()  # noqa: E501
        if include_optional:
            return Dataset(
                description = '',
                display_name = '',
                id = '',
                name = '',
                provenance = [
                    geoengine_openapi_client.models.provenance.Provenance(
                        citation = '', 
                        license = '', 
                        uri = '', )
                    ],
                result_descriptor = None,
                source_operator = '',
                symbology = None,
                tags = [
                    ''
                    ]
            )
        else:
            return Dataset(
                description = '',
                display_name = '',
                id = '',
                name = '',
                result_descriptor = None,
                source_operator = '',
        )
        """

    def testDataset(self):
        """Test Dataset"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
