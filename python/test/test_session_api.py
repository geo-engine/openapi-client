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

from geoengine_openapi_client.api.session_api import SessionApi


class TestSessionApi(unittest.TestCase):
    """SessionApi unit test stubs"""

    def setUp(self) -> None:
        self.api = SessionApi()

    def tearDown(self) -> None:
        pass

    def test_anonymous_handler(self) -> None:
        """Test case for anonymous_handler

        Creates session for anonymous user. The session's id serves as a Bearer token for requests.
        """
        pass

    def test_login_handler(self) -> None:
        """Test case for login_handler

        Creates a session by providing user credentials. The session's id serves as a Bearer token for requests.
        """
        pass

    def test_logout_handler(self) -> None:
        """Test case for logout_handler

        Ends a session.
        """
        pass

    def test_oidc_init(self) -> None:
        """Test case for oidc_init

        Initializes the Open Id Connect login procedure by requesting a parametrized url to the configured Id Provider.
        """
        pass

    def test_oidc_login(self) -> None:
        """Test case for oidc_login

        Creates a session for a user via a login with Open Id Connect.
        """
        pass

    def test_register_user_handler(self) -> None:
        """Test case for register_user_handler

        Registers a user.
        """
        pass

    def test_session_handler(self) -> None:
        """Test case for session_handler

        Retrieves details about the current session.
        """
        pass


if __name__ == '__main__':
    unittest.main()
