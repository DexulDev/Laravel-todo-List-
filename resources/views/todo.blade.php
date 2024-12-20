<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="{{ asset('app.css') }}">
    <script src="{{ asset('app.js') }}"></script>
    <title>Index</title>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card card-white">
                    <div class="card-body">
                        <form action="javascript:void(0);">
                            <input type="text" class="form-control add-task" placeholder="New task... Press Enter to create one." required>
                        </form>
                        <ul class="nav nav-pills todo-nav">
                            <li role="presentation" class="nav-item all-task active"><a href="#" class="nav-link">All</a></li>
                            <li role="presentation" class="nav-item active-task"><a href="#" class="nav-link">Active</a></li>
                            <li role="presentation" class="nav-item completed-task"><a href="#" class="nav-link">Completed</a></li>
                        </ul>
                        <div class="todo-list">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>