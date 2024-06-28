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

from geoengine_openapi_client.models.linear_gradient import LinearGradient

class TestLinearGradient(unittest.TestCase):
    """LinearGradient unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> LinearGradient:
        """Test LinearGradient
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `LinearGradient`
        """
        model = LinearGradient()
        if include_optional:
            return LinearGradient(
                breakpoints = [
                    geoengine_openapi_client.models.breakpoint.Breakpoint(
                        color = [
                            56
                            ], 
                        value = 1.337, )
                    ],
                no_data_color = [
                    56
                    ],
                over_color = [
                    56
                    ],
                type = 'linearGradient',
                under_color = [
                    56
                    ]
            )
        else:
            return LinearGradient(
                breakpoints = [
                    geoengine_openapi_client.models.breakpoint.Breakpoint(
                        color = [
                            56
                            ], 
                        value = 1.337, )
                    ],
                no_data_color = [
                    56
                    ],
                over_color = [
                    56
                    ],
                type = 'linearGradient',
                under_color = [
                    56
                    ],
        )
        """

    def testLinearGradient(self):
        """Test LinearGradient"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
