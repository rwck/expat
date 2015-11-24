# Questions for Greg

## Where to put the logic in list iteration

## Why am I getting this:

## JST / EJS - look this up in terms of templating

## REadup on jsonp

`git diff --name-status master..branch`

`mergebase`


* look at EJS gem for rails

```
Started GET "/" for ::1 at 2015-11-23 08:14:32 +1100
Processing by UsersController#home as HTML
  Rendered users/home.html.erb within layouts/application (0.1ms)
Completed 200 OK in 78ms (Views: 77.3ms | ActiveRecord: 0.0ms)

ActionController::RoutingError (No route matches [GET] "/assets/underscore-min.map"):
  actionpack (4.2.4) lib/action_dispatch/middleware/debug_exceptions.rb:21:in `call'
  web-console (2.2.1) lib/web_console/middleware.rb:39:in `call'
  actionpack (4.2.4) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call'
  railties (4.2.4) lib/rails/rack/logger.rb:38:in `call_app'
  railties (4.2.4) lib/rails/rack/logger.rb:20:in `block in call'
  activesupport (4.2.4) lib/active_support/tagged_logging.rb:68:in `block in tagged'
  activesupport (4.2.4) lib/active_support/tagged_logging.rb:26:in `tagged'
  activesupport (4.2.4) lib/active_support/tagged_logging.rb:68:in `tagged'
  railties (4.2.4) lib/rails/rack/logger.rb:20:in `call'
  quiet_assets (1.1.0) lib/quiet_assets.rb:27:in `call_with_quiet_assets'
  actionpack (4.2.4) lib/action_dispatch/middleware/request_id.rb:21:in `call'
  rack (1.6.4) lib/rack/methodoverride.rb:22:in `call'
  rack (1.6.4) lib/rack/runtime.rb:18:in `call'
  activesupport (4.2.4) lib/active_support/cache/strategy/local_cache_middleware.rb:28:in `call'
  rack (1.6.4) lib/rack/lock.rb:17:in `call'
  rack-livereload (0.3.16) lib/rack/livereload.rb:23:in `_call'
  rack-livereload (0.3.16) lib/rack/livereload.rb:14:in `call'
  actionpack (4.2.4) lib/action_dispatch/middleware/static.rb:116:in `call'
  rack (1.6.4) lib/rack/sendfile.rb:113:in `call'
  railties (4.2.4) lib/rails/engine.rb:518:in `call'
  railties (4.2.4) lib/rails/application.rb:165:in `call'
  rack (1.6.4) lib/rack/content_length.rb:15:in `call'
  puma (2.14.0) lib/puma/server.rb:541:in `handle_request'
  puma (2.14.0) lib/puma/server.rb:388:in `process_client'
  puma (2.14.0) lib/puma/server.rb:270:in `block in run'
  puma (2.14.0) lib/puma/thread_pool.rb:106:in `call'
  puma (2.14.0) lib/puma/thread_pool.rb:106:in `block in spawn_thread'



ActionController::RoutingError (No route matches [GET] "/assets/backbone-min.map"):
  actionpack (4.2.4) lib/action_dispatch/middleware/debug_exceptions.rb:21:in `call'
  web-console (2.2.1) lib/web_console/middleware.rb:39:in `call'
  actionpack (4.2.4) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call'
  railties (4.2.4) lib/rails/rack/logger.rb:38:in `call_app'
  railties (4.2.4) lib/rails/rack/logger.rb:20:in `block in call'
  activesupport (4.2.4) lib/active_support/tagged_logging.rb:68:in `block in tagged'
  activesupport (4.2.4) lib/active_support/tagged_logging.rb:26:in `tagged'
  activesupport (4.2.4) lib/active_support/tagged_logging.rb:68:in `tagged'
  railties (4.2.4) lib/rails/rack/logger.rb:20:in `call'
  quiet_assets (1.1.0) lib/quiet_assets.rb:27:in `call_with_quiet_assets'
  actionpack (4.2.4) lib/action_dispatch/middleware/request_id.rb:21:in `call'
  rack (1.6.4) lib/rack/methodoverride.rb:22:in `call'
  rack (1.6.4) lib/rack/runtime.rb:18:in `call'
  activesupport (4.2.4) lib/active_support/cache/strategy/local_cache_middleware.rb:28:in `call'
  rack (1.6.4) lib/rack/lock.rb:17:in `call'
  rack-livereload (0.3.16) lib/rack/livereload.rb:23:in `_call'
  rack-livereload (0.3.16) lib/rack/livereload.rb:14:in `call'
  actionpack (4.2.4) lib/action_dispatch/middleware/static.rb:116:in `call'
  rack (1.6.4) lib/rack/sendfile.rb:113:in `call'
  railties (4.2.4) lib/rails/engine.rb:518:in `call'
  railties (4.2.4) lib/rails/application.rb:165:in `call'
  rack (1.6.4) lib/rack/content_length.rb:15:in `call'
  puma (2.14.0) lib/puma/server.rb:541:in `handle_request'
  puma (2.14.0) lib/puma/server.rb:388:in `process_client'
  puma (2.14.0) lib/puma/server.rb:270:in `block in run'
  puma (2.14.0) lib/puma/thread_pool.rb:106:in `call'
  puma (2.14.0) lib/puma/thread_pool.rb:106:in `block in spawn_thread'
```
