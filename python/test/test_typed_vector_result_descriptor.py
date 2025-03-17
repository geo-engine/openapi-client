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

from geoengine_openapi_client.models.typed_vector_result_descriptor import TypedVectorResultDescriptor

class TestTypedVectorResultDescriptor(unittest.TestCase):
    """TypedVectorResultDescriptor unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> TypedVectorResultDescriptor:
        """Test TypedVectorResultDescriptor
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `TypedVectorResultDescriptor`
        """
        model = TypedVectorResultDescriptor()
        if include_optional:
            return TypedVectorResultDescriptor(
                type = 'vector'
            )
        else:
            return TypedVectorResultDescriptor(
                type = 'vector',
        )
        """

    def testTypedVectorResultDescriptor(self):
        """Test TypedVectorResultDescriptor"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
