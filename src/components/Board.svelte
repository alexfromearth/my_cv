<div class="main-board">
    <slot></slot>
</div>

<style>
    .main-board {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 900px;
        background-color: var(--whitesmoke);
        border: 1px solid var(--light-gray);
        border-radius: 3px;
    }
</style>