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

from geoengine_openapi_client.models.add_dataset import AddDataset  # noqa: E501

class TestAddDataset(unittest.TestCase):
    """AddDataset unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> AddDataset:
        """Test AddDataset
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `AddDataset`
        """
        model = AddDataset()  # noqa: E501
        if include_optional:
            return AddDataset(
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
                symbology = None,
                tags = [
                    ''
                    ]
            )
        else:
            return AddDataset(
                description = '',
                display_name = '',
                source_operator = '',
        )
        """

    def testAddDataset(self):
        """Test AddDataset"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
