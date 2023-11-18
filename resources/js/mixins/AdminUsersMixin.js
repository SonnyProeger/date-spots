export const AdminUsersMixin = {
    methods: {
        getRoleName(role_id) {
            switch (role_id) {
                case 1:
                    return 'SuperAdmin';
                case 2:
                    return 'Admin';
                case 3:
                    return 'Company';
                case 4:
                    return 'User';
                default:
                    return 'unknown';
            }
        },
    },
    computed: {
        isAdmin() {
            return this.$page.props.auth.user.role.name === 'Admin';
        },
        isSuperAdmin() {
            return this.$page.props.auth.user.role.name === 'SuperAdmin';
        },
        isCompany() {
            return this.$page.props.auth.user.role.name === 'Company';
        },

    }
}