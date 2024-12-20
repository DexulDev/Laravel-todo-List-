$(document).ready(function() {
    "use strict";

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    var todo = function() {
        function fetchTasks() {
            $.ajax({
                url: '/tasks/show',
                method: 'GET',
                success: function(response) {
                    $('.todo-list').empty();
                    if (!response || response.length === 0) {
                        $('.todo-list').append('<p>No tasks available.</p>');
                        return;
                    }

                    const tasks = Array.isArray(response) ? response[0] : response;
                    tasks.forEach(function(task) {
                        const isCompleted = task.completed === true || task.completed === 1 || task.completed === "1";
                        var taskItem = `
                            <div class="todo-item ${isCompleted ? 'complete' : ''}">
                                <div class="checker">
                                    <span class="">
                                        <input type="checkbox" ${isCompleted ? 'checked' : ''} data-id="${task.id}">
                                    </span>
                                </div>
                                <span>${task.name}</span>
                                <p class="task-description">${task.description || ''}</p>
                                ${task.due_date ? `<span class="due-date">Due: ${task.due_date}</span>` : ''}
                                <a href="javascript:void(0);" class="float-right remove-todo-item" data-id="${task.id}">
                                    <i class="icon-close"></i>
                                </a>
                            </div>
                        `;
                        $('.todo-list').append(taskItem);
                    });
                },
                error: function(error) {
                    console.error('Error fetching tasks:', error);
                    $('.todo-list').empty().append('<p>Error loading tasks. Please try again.</p>');
                }
            });
        }

        fetchTasks();

        // Toggle task completion
        $('.todo-list').on('click', '.todo-item input[type="checkbox"]', function() {
            var $checkbox = $(this);
            var taskId = $checkbox.data('id');
            var currentState = $checkbox.prop('checked');
            
            // Store the original state in case we need to revert
            var originalState = !currentState;

            $.ajax({
                url: `/tasks/edit/${taskId}`,
                method: 'PUT',
                data: {
                    _token: $('meta[name="csrf-token"]').attr('content'),
                    completed: currentState
                },
                success: function(response) {
                    
                    if (response && response.error) {
                        console.error('Server error:', response.error);
                        alert('Error updating task status. Please try again.');
                        $checkbox.prop('checked', originalState);
                        $checkbox.closest('.todo-item').toggleClass('complete', originalState);
                    } else {
                        $checkbox.closest('.todo-item').toggleClass('complete', currentState);
                    }
                },
                error: function(error) {
                    console.error('Error updating task:', error);
                    console.error('Error details:', error.responseJSON);
                    alert('Error updating task status. Please try again.');
                    
                    // Revert the checkbox state
                    $checkbox.prop('checked', originalState);
                    $checkbox.closest('.todo-item').toggleClass('complete', originalState);
                }
            });
        });

        // Add new task
        $('.add-task').keypress(function(e) {
            if (e.which == 13) {
                var taskName = $(this).val().trim();
                if (!taskName) {
                    alert('Please enter a task name');
                    return;
                }
                
                $.ajax({
                    url: '/tasks/new',
                    method: 'POST',
                    data: {
                        name: taskName,
                        description: '',
                        completed: false,
                        _token: $('meta[name="csrf-token"]').attr('content')
                    },
                    success: function(response) {
                        if (response && response.error) {
                            console.error('Server error:', response.error);
                            alert('Error creating task. Please try again.');
                        } else {
                            fetchTasks();
                            $('.add-task').val('');
                        }
                    },
                    error: function(error) {
                        console.error('Error adding task:', error);
                        console.error('Error details:', error.responseJSON);
                        alert('Error adding task. Please try again.');
                    }
                });
            }
        });

        // Filter tasks remain unchanged
        $('.todo-nav .all-task').click(function() {
            $('.todo-list').removeClass('only-active only-complete');
            $('.todo-nav li.active').removeClass('active');
            $(this).addClass('active');
        });

        $('.todo-nav .active-task').click(function() {
            $('.todo-list').removeClass('only-complete').addClass('only-active');
            $('.todo-nav li.active').removeClass('active');
            $(this).addClass('active');
        });

        $('.todo-nav .completed-task').click(function() {
            $('.todo-list').removeClass('only-active').addClass('only-complete');
            $('.todo-nav li.active').removeClass('active');
            $(this).addClass('active');
        });
    };

    todo();
});