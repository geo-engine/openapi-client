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

from geoengine_openapi_client.api.ogcwms_api import OGCWMSApi


class TestOGCWMSApi(unittest.TestCase):
    """OGCWMSApi unit test stubs"""

    def setUp(self) -> None:
        self.api = OGCWMSApi()

    def tearDown(self) -> None:
        pass

    def test_wms_capabilities_handler(self) -> None:
        """Test case for wms_capabilities_handler

        Get WMS Capabilities
        """
        pass

    def test_wms_legend_graphic_handler(self) -> None:
        """Test case for wms_legend_graphic_handler

        Get WMS Legend Graphic
        """
        pass

    def test_wms_map_handler(self) -> None:
        """Test case for wms_map_handler

        Get WMS Map
        """
        pass


if __name__ == '__main__':
    unittest.main()
