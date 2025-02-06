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

from geoengine_openapi_client.api.user_api import UserApi


class TestUserApi(unittest.TestCase):
    """UserApi unit test stubs"""

    def setUp(self) -> None:
        self.api = UserApi()

    def tearDown(self) -> None:
        pass

    def test_add_role_handler(self) -> None:
        """Test case for add_role_handler

        Add a new role. Requires admin privilige.
        """
        pass

    def test_assign_role_handler(self) -> None:
        """Test case for assign_role_handler

        Assign a role to a user. Requires admin privilige.
        """
        pass

    def test_computation_quota_handler(self) -> None:
        """Test case for computation_quota_handler

        Retrieves the quota used by computation with the given computation id
        """
        pass

    def test_computations_quota_handler(self) -> None:
        """Test case for computations_quota_handler

        Retrieves the quota used by computations
        """
        pass

    def test_data_usage_handler(self) -> None:
        """Test case for data_usage_handler

        Retrieves the data usage
        """
        pass

    def test_data_usage_summary_handler(self) -> None:
        """Test case for data_usage_summary_handler

        Retrieves the data usage summary
        """
        pass

    def test_get_role_by_name_handler(self) -> None:
        """Test case for get_role_by_name_handler

        Get role by name
        """
        pass

    def test_get_role_descriptions(self) -> None:
        """Test case for get_role_descriptions

        Query roles for the current user.
        """
        pass

    def test_get_user_quota_handler(self) -> None:
        """Test case for get_user_quota_handler

        Retrieves the available and used quota of a specific user.
        """
        pass

    def test_quota_handler(self) -> None:
        """Test case for quota_handler

        Retrieves the available and used quota of the current user.
        """
        pass

    def test_remove_role_handler(self) -> None:
        """Test case for remove_role_handler

        Remove a role. Requires admin privilige.
        """
        pass

    def test_revoke_role_handler(self) -> None:
        """Test case for revoke_role_handler

        Revoke a role from a user. Requires admin privilige.
        """
        pass

    def test_update_user_quota_handler(self) -> None:
        """Test case for update_user_quota_handler

        Update the available quota of a specific user.
        """
        pass


if __name__ == '__main__':
    unittest.main()
