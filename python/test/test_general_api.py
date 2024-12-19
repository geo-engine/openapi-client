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

from geoengine_openapi_client.api.general_api import GeneralApi  # noqa: E501


class TestGeneralApi(unittest.TestCase):
    """GeneralApi unit test stubs"""

    def setUp(self) -> None:
        self.api = GeneralApi()  # noqa: E501

    def tearDown(self) -> None:
        pass

    def test_available_handler(self) -> None:
        """Test case for available_handler

        Server availablity check.  # noqa: E501
        """
        pass

    def test_server_info_handler(self) -> None:
        """Test case for server_info_handler

        Shows information about the server software version.  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
