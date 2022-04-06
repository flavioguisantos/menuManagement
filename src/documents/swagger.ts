
export default {
    "swagger": "2.0",
    "info": {
        "title": "API Documentation - Menu",
        "description": "Project Menu API Documentation",
        "version": "1.0.0"
    },
    "host": "localhost:8000/",
    "basePath": "/",
    "schemes": [
        "http"
    ],
    "paths": {
        "healthcheck": {
            "get": {
                "tags": [
                    "Health Check"
                ],
                "description": "",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            }
        },
        "api/v1/menu": {
            "get": {
                "tags": [
                    "Menu"
                ],
                "description": "",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "OK"
                    }
                }
            },
            "post": {
                "tags": [
                    "Menu"
                ],
                "description": "Create a new menu or submenu",
                "parameters": [
                    {
                        "name": "name",
                        "in": "body",
                        "required": true,
                        "description": "name it's required string, relatedId not required string",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "example": ""
                                },
                                "relatedId": {
                                    "type": "string",
                                    "example": ""
                                }
                            }
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "{ id : '624de433daf4dce5aac6693a' }"
                    }
                }
            }
        },
        "api/v1/menu/{id}": {
            "delete": {
                "tags": [
                    "Menu"
                ],
                "description": "Delete a menu and all submenus",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": '"remove": "REMOVE xxxx LEVEL 624de4f208a56f404e16662a"'
                    }
                }
            }
        }
    }
}