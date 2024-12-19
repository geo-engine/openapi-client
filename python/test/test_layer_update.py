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

from geoengine_openapi_client.models.layer_update import LayerUpdate  # noqa: E501

class TestLayerUpdate(unittest.TestCase):
    """LayerUpdate unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> LayerUpdate:
        """Test LayerUpdate
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `LayerUpdate`
        """
        model = LayerUpdate()  # noqa: E501
        if include_optional:
            return LayerUpdate(
                name = '',
                symbology = None,
                visibility = geoengine_openapi_client.models.layer_visibility.LayerVisibility(
                    data = True, 
                    legend = True, ),
                workflow = ''
            )
        else:
            return LayerUpdate(
                name = '',
                symbology = None,
                visibility = geoengine_openapi_client.models.layer_visibility.LayerVisibility(
                    data = True, 
                    legend = True, ),
                workflow = '',
        )
        """

    def testLayerUpdate(self):
        """Test LayerUpdate"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
