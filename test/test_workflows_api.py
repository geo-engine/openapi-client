# coding: utf-8

"""
    Geo Engine Pro API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.7.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from geoengine_openapi_client.api.workflows_api import WorkflowsApi  # noqa: E501


class TestWorkflowsApi(unittest.TestCase):
    """WorkflowsApi unit test stubs"""

    def setUp(self) -> None:
        self.api = WorkflowsApi()  # noqa: E501

    def tearDown(self) -> None:
        pass

    def test_dataset_from_workflow_handler(self) -> None:
        """Test case for dataset_from_workflow_handler

        Create a task for creating a new dataset from the result of the workflow given by its `id` and the dataset parameters in the request body.  # noqa: E501
        """
        pass

    def test_get_workflow_all_metadata_zip_handler(self) -> None:
        """Test case for get_workflow_all_metadata_zip_handler

        Gets a ZIP archive of the worklow, its provenance and the output metadata.  # noqa: E501
        """
        pass

    def test_get_workflow_metadata_handler(self) -> None:
        """Test case for get_workflow_metadata_handler

        Gets the metadata of a workflow  # noqa: E501
        """
        pass

    def test_get_workflow_provenance_handler(self) -> None:
        """Test case for get_workflow_provenance_handler

        Gets the provenance of all datasets used in a workflow.  # noqa: E501
        """
        pass

    def test_load_workflow_handler(self) -> None:
        """Test case for load_workflow_handler

        Retrieves an existing Workflow.  # noqa: E501
        """
        pass

    def test_raster_stream_websocket(self) -> None:
        """Test case for raster_stream_websocket

        Query a workflow raster result as a stream of tiles via a websocket connection.  # noqa: E501
        """
        pass

    def test_register_workflow_handler(self) -> None:
        """Test case for register_workflow_handler

        Registers a new Workflow.  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()