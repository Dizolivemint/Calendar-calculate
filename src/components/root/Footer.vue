<template>
    <div>
        <!-- Footer -->
        <footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright © Dizolivemint {{ currentYear }}</span>
                </div>
            </div>
        </footer>
        <!-- End of Footer -->

        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>
    </div>
</template>

<script>
const date = new Date();
export default {
    data: () => ({ currentYear: date.getFullYear() })
}
</script>
