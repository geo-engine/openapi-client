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

from geoengine_openapi_client.api.permissions_api import PermissionsApi


class TestPermissionsApi(unittest.TestCase):
    """PermissionsApi unit test stubs"""

    def setUp(self) -> None:
        self.api = PermissionsApi()

    def tearDown(self) -> None:
        pass

    def test_add_permission_handler(self) -> None:
        """Test case for add_permission_handler

        Adds a new permission.
        """
        pass

    def test_get_resource_permissions_handler(self) -> None:
        """Test case for get_resource_permissions_handler

        Lists permission for a given resource.
        """
        pass

    def test_remove_permission_handler(self) -> None:
        """Test case for remove_permission_handler

        Removes an existing permission.
        """
        pass


if __name__ == '__main__':
    unittest.main()
