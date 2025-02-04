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

from geoengine_openapi_client.api.uploads_api import UploadsApi  # noqa: E501


class TestUploadsApi(unittest.TestCase):
    """UploadsApi unit test stubs"""

    def setUp(self) -> None:
        self.api = UploadsApi()  # noqa: E501

    def tearDown(self) -> None:
        pass

    def test_list_upload_file_layers_handler(self) -> None:
        """Test case for list_upload_file_layers_handler

        List the layers of on uploaded file.  # noqa: E501
        """
        pass

    def test_list_upload_files_handler(self) -> None:
        """Test case for list_upload_files_handler

        List the files of on upload.  # noqa: E501
        """
        pass

    def test_upload_handler(self) -> None:
        """Test case for upload_handler

        Uploads files.  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
