#!/usr/bin/env python3
import tornado.ioloop
import tornado.httpserver
import tornado.web
from index import IndexHandler

settings = {
    "static_path": "static",
}

application = tornado.web.Application([
    (r"/", IndexHandler),
], **settings)

if __name__ == "__main__":
    server = tornado.httpserver.HTTPServer(application, xheaders=True)
    server.bind(8888)
    server.start(3)
    tornado.ioloop.IOLoop.current().start()
