# coding: utf-8

"""
    Geo Engine Pro API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.8.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest
import datetime

from geoengine_openapi_client.models.update_layer_collection import UpdateLayerCollection  # noqa: E501

class TestUpdateLayerCollection(unittest.TestCase):
    """UpdateLayerCollection unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> UpdateLayerCollection:
        """Test UpdateLayerCollection
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `UpdateLayerCollection`
        """
        model = UpdateLayerCollection()  # noqa: E501
        if include_optional:
            return UpdateLayerCollection(
                description = 'A description for an example collection',
                name = 'Example Collection',
                properties = [
                    [
                        ''
                        ]
                    ]
            )
        else:
            return UpdateLayerCollection(
                description = 'A description for an example collection',
                name = 'Example Collection',
        )
        """

    def testUpdateLayerCollection(self):
        """Test UpdateLayerCollection"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
