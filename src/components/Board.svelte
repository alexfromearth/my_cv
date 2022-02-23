<div class="main-board">
    <slot></slot>
</div>

<style>
    .main-board {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        height: 1200px;
        width: 900px;
        background-color: #F2F2F2;
        border: 1px solid #BABBBD;
        border-radius: 3px;
    }
</style>