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

from geoengine_openapi_client.models.project_listing import ProjectListing  # noqa: E501

class TestProjectListing(unittest.TestCase):
    """ProjectListing unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ProjectListing:
        """Test ProjectListing
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ProjectListing`
        """
        model = ProjectListing()  # noqa: E501
        if include_optional:
            return ProjectListing(
                changed = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                description = '',
                id = '',
                layer_names = [
                    ''
                    ],
                name = '',
                plot_names = [
                    ''
                    ]
            )
        else:
            return ProjectListing(
                changed = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                description = '',
                id = '',
                layer_names = [
                    ''
                    ],
                name = '',
                plot_names = [
                    ''
                    ],
        )
        """

    def testProjectListing(self):
        """Test ProjectListing"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
