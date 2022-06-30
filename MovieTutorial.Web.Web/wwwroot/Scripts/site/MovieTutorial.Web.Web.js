var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var LanguageColumns = /** @class */ (function () {
                function LanguageColumns() {
                }
                LanguageColumns.columnsKey = 'Administration.Language';
                return LanguageColumns;
            }());
            Administration.LanguageColumns = LanguageColumns;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var LanguageForm = /** @class */ (function (_super) {
                __extends(LanguageForm, _super);
                function LanguageForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!LanguageForm.init) {
                        LanguageForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        Q.initFormType(LanguageForm, [
                            'LanguageId', w0,
                            'LanguageName', w0
                        ]);
                    }
                    return _this;
                }
                LanguageForm.formKey = 'Administration.Language';
                return LanguageForm;
            }(Serenity.PrefixedContext));
            Administration.LanguageForm = LanguageForm;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var LanguageRow;
            (function (LanguageRow) {
                LanguageRow.idProperty = 'Id';
                LanguageRow.nameProperty = 'LanguageName';
                LanguageRow.localTextPrefix = 'Administration.Language';
                LanguageRow.lookupKey = 'Web.Administration.Language';
                function getLookup() {
                    return Q.getLookup('Web.Administration.Language');
                }
                LanguageRow.getLookup = getLookup;
                LanguageRow.deletePermission = 'Administration:Translation';
                LanguageRow.insertPermission = 'Administration:Translation';
                LanguageRow.readPermission = 'Administration:Translation';
                LanguageRow.updatePermission = 'Administration:Translation';
            })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var LanguageService;
            (function (LanguageService) {
                LanguageService.baseUrl = 'Administration/Language';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    LanguageService[x] = function (r, s, o) {
                        return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var PermissionKeys;
            (function (PermissionKeys) {
                PermissionKeys.Security = "Administration:Security";
                PermissionKeys.Translation = "Administration:Translation";
            })(PermissionKeys = Administration.PermissionKeys || (Administration.PermissionKeys = {}));
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var RoleColumns = /** @class */ (function () {
                function RoleColumns() {
                }
                RoleColumns.columnsKey = 'Administration.Role';
                return RoleColumns;
            }());
            Administration.RoleColumns = RoleColumns;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var RoleForm = /** @class */ (function (_super) {
                __extends(RoleForm, _super);
                function RoleForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!RoleForm.init) {
                        RoleForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        Q.initFormType(RoleForm, [
                            'RoleName', w0
                        ]);
                    }
                    return _this;
                }
                RoleForm.formKey = 'Administration.Role';
                return RoleForm;
            }(Serenity.PrefixedContext));
            Administration.RoleForm = RoleForm;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var RolePermissionRow;
            (function (RolePermissionRow) {
                RolePermissionRow.idProperty = 'RolePermissionId';
                RolePermissionRow.nameProperty = 'PermissionKey';
                RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
                RolePermissionRow.deletePermission = 'Administration:Security';
                RolePermissionRow.insertPermission = 'Administration:Security';
                RolePermissionRow.readPermission = 'Administration:Security';
                RolePermissionRow.updatePermission = 'Administration:Security';
            })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var RolePermissionService;
            (function (RolePermissionService) {
                RolePermissionService.baseUrl = 'Administration/RolePermission';
                [
                    'Update',
                    'List'
                ].forEach(function (x) {
                    RolePermissionService[x] = function (r, s, o) {
                        return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var RoleRow;
            (function (RoleRow) {
                RoleRow.idProperty = 'RoleId';
                RoleRow.nameProperty = 'RoleName';
                RoleRow.localTextPrefix = 'Administration.Role';
                RoleRow.lookupKey = 'Administration.Role';
                function getLookup() {
                    return Q.getLookup('Administration.Role');
                }
                RoleRow.getLookup = getLookup;
                RoleRow.deletePermission = 'Administration:Security';
                RoleRow.insertPermission = 'Administration:Security';
                RoleRow.readPermission = 'Administration:Security';
                RoleRow.updatePermission = 'Administration:Security';
            })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var RoleService;
            (function (RoleService) {
                RoleService.baseUrl = 'Administration/Role';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    RoleService[x] = function (r, s, o) {
                        return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var TranslationService;
            (function (TranslationService) {
                TranslationService.baseUrl = 'Administration/Translation';
                [
                    'List',
                    'Update'
                ].forEach(function (x) {
                    TranslationService[x] = function (r, s, o) {
                        return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var UserColumns = /** @class */ (function () {
                function UserColumns() {
                }
                UserColumns.columnsKey = 'Administration.User';
                return UserColumns;
            }());
            Administration.UserColumns = UserColumns;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var UserForm = /** @class */ (function (_super) {
                __extends(UserForm, _super);
                function UserForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!UserForm.init) {
                        UserForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.EmailEditor;
                        var w2 = s.ImageUploadEditor;
                        var w3 = s.PasswordEditor;
                        Q.initFormType(UserForm, [
                            'Username', w0,
                            'DisplayName', w0,
                            'Email', w1,
                            'UserImage', w2,
                            'Password', w3,
                            'PasswordConfirm', w3,
                            'Source', w0
                        ]);
                    }
                    return _this;
                }
                UserForm.formKey = 'Administration.User';
                return UserForm;
            }(Serenity.PrefixedContext));
            Administration.UserForm = UserForm;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var UserPermissionRow;
            (function (UserPermissionRow) {
                UserPermissionRow.idProperty = 'UserPermissionId';
                UserPermissionRow.nameProperty = 'PermissionKey';
                UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
                UserPermissionRow.deletePermission = 'Administration:Security';
                UserPermissionRow.insertPermission = 'Administration:Security';
                UserPermissionRow.readPermission = 'Administration:Security';
                UserPermissionRow.updatePermission = 'Administration:Security';
            })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var UserPermissionService;
            (function (UserPermissionService) {
                UserPermissionService.baseUrl = 'Administration/UserPermission';
                [
                    'Update',
                    'List',
                    'ListRolePermissions',
                    'ListPermissionKeys'
                ].forEach(function (x) {
                    UserPermissionService[x] = function (r, s, o) {
                        return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var UserRoleRow;
            (function (UserRoleRow) {
                UserRoleRow.idProperty = 'UserRoleId';
                UserRoleRow.localTextPrefix = 'Administration.UserRole';
                UserRoleRow.deletePermission = 'Administration:Security';
                UserRoleRow.insertPermission = 'Administration:Security';
                UserRoleRow.readPermission = 'Administration:Security';
                UserRoleRow.updatePermission = 'Administration:Security';
            })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var UserRoleService;
            (function (UserRoleService) {
                UserRoleService.baseUrl = 'Administration/UserRole';
                [
                    'Update',
                    'List'
                ].forEach(function (x) {
                    UserRoleService[x] = function (r, s, o) {
                        return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var UserRow;
            (function (UserRow) {
                UserRow.idProperty = 'UserId';
                UserRow.isActiveProperty = 'IsActive';
                UserRow.nameProperty = 'Username';
                UserRow.localTextPrefix = 'Administration.User';
                UserRow.lookupKey = 'Administration.User';
                function getLookup() {
                    return Q.getLookup('Administration.User');
                }
                UserRow.getLookup = getLookup;
                UserRow.deletePermission = 'Administration:Security';
                UserRow.insertPermission = 'Administration:Security';
                UserRow.readPermission = 'Administration:Security';
                UserRow.updatePermission = 'Administration:Security';
            })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var UserService;
            (function (UserService) {
                UserService.baseUrl = 'Administration/User';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Undelete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    UserService[x] = function (r, s, o) {
                        return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(UserService = Administration.UserService || (Administration.UserService = {}));
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Membership;
        (function (Membership) {
            var ChangePasswordForm = /** @class */ (function (_super) {
                __extends(ChangePasswordForm, _super);
                function ChangePasswordForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!ChangePasswordForm.init) {
                        ChangePasswordForm.init = true;
                        var s = Serenity;
                        var w0 = s.PasswordEditor;
                        Q.initFormType(ChangePasswordForm, [
                            'OldPassword', w0,
                            'NewPassword', w0,
                            'ConfirmPassword', w0
                        ]);
                    }
                    return _this;
                }
                ChangePasswordForm.formKey = 'Membership.ChangePassword';
                return ChangePasswordForm;
            }(Serenity.PrefixedContext));
            Membership.ChangePasswordForm = ChangePasswordForm;
        })(Membership = Web.Membership || (Web.Membership = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Membership;
        (function (Membership) {
            var ForgotPasswordForm = /** @class */ (function (_super) {
                __extends(ForgotPasswordForm, _super);
                function ForgotPasswordForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!ForgotPasswordForm.init) {
                        ForgotPasswordForm.init = true;
                        var s = Serenity;
                        var w0 = s.EmailAddressEditor;
                        Q.initFormType(ForgotPasswordForm, [
                            'Email', w0
                        ]);
                    }
                    return _this;
                }
                ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
                return ForgotPasswordForm;
            }(Serenity.PrefixedContext));
            Membership.ForgotPasswordForm = ForgotPasswordForm;
        })(Membership = Web.Membership || (Web.Membership = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Membership;
        (function (Membership) {
            var LoginForm = /** @class */ (function (_super) {
                __extends(LoginForm, _super);
                function LoginForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!LoginForm.init) {
                        LoginForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.PasswordEditor;
                        Q.initFormType(LoginForm, [
                            'Username', w0,
                            'Password', w1
                        ]);
                    }
                    return _this;
                }
                LoginForm.formKey = 'Membership.Login';
                return LoginForm;
            }(Serenity.PrefixedContext));
            Membership.LoginForm = LoginForm;
        })(Membership = Web.Membership || (Web.Membership = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Membership;
        (function (Membership) {
            var ResetPasswordForm = /** @class */ (function (_super) {
                __extends(ResetPasswordForm, _super);
                function ResetPasswordForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!ResetPasswordForm.init) {
                        ResetPasswordForm.init = true;
                        var s = Serenity;
                        var w0 = s.PasswordEditor;
                        Q.initFormType(ResetPasswordForm, [
                            'NewPassword', w0,
                            'ConfirmPassword', w0
                        ]);
                    }
                    return _this;
                }
                ResetPasswordForm.formKey = 'Membership.ResetPassword';
                return ResetPasswordForm;
            }(Serenity.PrefixedContext));
            Membership.ResetPasswordForm = ResetPasswordForm;
        })(Membership = Web.Membership || (Web.Membership = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Membership;
        (function (Membership) {
            var SignUpForm = /** @class */ (function (_super) {
                __extends(SignUpForm, _super);
                function SignUpForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!SignUpForm.init) {
                        SignUpForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.EmailAddressEditor;
                        var w2 = s.PasswordEditor;
                        Q.initFormType(SignUpForm, [
                            'DisplayName', w0,
                            'Email', w1,
                            'ConfirmEmail', w1,
                            'Password', w2,
                            'ConfirmPassword', w2
                        ]);
                    }
                    return _this;
                }
                SignUpForm.formKey = 'Membership.SignUp';
                return SignUpForm;
            }(Serenity.PrefixedContext));
            Membership.SignUpForm = SignUpForm;
        })(Membership = Web.Membership || (Web.Membership = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var GenreColumns = /** @class */ (function () {
                function GenreColumns() {
                }
                GenreColumns.columnsKey = 'MovieDB.Genre';
                return GenreColumns;
            }());
            MovieDB.GenreColumns = GenreColumns;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var GenreForm = /** @class */ (function (_super) {
                __extends(GenreForm, _super);
                function GenreForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!GenreForm.init) {
                        GenreForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        Q.initFormType(GenreForm, [
                            'Name', w0
                        ]);
                    }
                    return _this;
                }
                GenreForm.formKey = 'MovieDB.Genre';
                return GenreForm;
            }(Serenity.PrefixedContext));
            MovieDB.GenreForm = GenreForm;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var GenreRow;
            (function (GenreRow) {
                GenreRow.idProperty = 'GenreId';
                GenreRow.nameProperty = 'Name';
                GenreRow.localTextPrefix = 'MovieDB.Genre';
                GenreRow.lookupKey = 'MovieDB.Genre';
                function getLookup() {
                    return Q.getLookup('MovieDB.Genre');
                }
                GenreRow.getLookup = getLookup;
                GenreRow.deletePermission = 'Administration:General';
                GenreRow.insertPermission = 'Administration:General';
                GenreRow.readPermission = 'Administration:General';
                GenreRow.updatePermission = 'Administration:General';
            })(GenreRow = MovieDB.GenreRow || (MovieDB.GenreRow = {}));
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var GenreService;
            (function (GenreService) {
                GenreService.baseUrl = 'MovieDB/Genre';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    GenreService[x] = function (r, s, o) {
                        return Q.serviceRequest(GenreService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(GenreService = MovieDB.GenreService || (MovieDB.GenreService = {}));
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieColumns = /** @class */ (function () {
                function MovieColumns() {
                }
                MovieColumns.columnsKey = 'MovieDB.Movie';
                return MovieColumns;
            }());
            MovieDB.MovieColumns = MovieColumns;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieForm = /** @class */ (function (_super) {
                __extends(MovieForm, _super);
                function MovieForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!MovieForm.init) {
                        MovieForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.TextAreaEditor;
                        var w2 = MovieDB.MovieCastEditor;
                        var w3 = s.IntegerEditor;
                        var w4 = s.DateEditor;
                        var w5 = s.LookupEditor;
                        var w6 = s.EnumEditor;
                        Q.initFormType(MovieForm, [
                            'Title', w0,
                            'Description', w1,
                            'CastList', w2,
                            'Storyline', w1,
                            'Year', w3,
                            'ReleaseDate', w4,
                            'GenreList', w5,
                            'Kind', w6,
                            'Runtime', w3
                        ]);
                    }
                    return _this;
                }
                MovieForm.formKey = 'MovieDB.Movie';
                return MovieForm;
            }(Serenity.PrefixedContext));
            MovieDB.MovieForm = MovieForm;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieGenresColumns = /** @class */ (function () {
                function MovieGenresColumns() {
                }
                MovieGenresColumns.columnsKey = 'MovieDB.MovieGenres';
                return MovieGenresColumns;
            }());
            MovieDB.MovieGenresColumns = MovieGenresColumns;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieGenresForm = /** @class */ (function (_super) {
                __extends(MovieGenresForm, _super);
                function MovieGenresForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!MovieGenresForm.init) {
                        MovieGenresForm.init = true;
                        var s = Serenity;
                        var w0 = s.IntegerEditor;
                        Q.initFormType(MovieGenresForm, [
                            'MovieId', w0,
                            'GenreId', w0
                        ]);
                    }
                    return _this;
                }
                MovieGenresForm.formKey = 'MovieDB.MovieGenres';
                return MovieGenresForm;
            }(Serenity.PrefixedContext));
            MovieDB.MovieGenresForm = MovieGenresForm;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieGenresRow;
            (function (MovieGenresRow) {
                MovieGenresRow.idProperty = 'MovieGenreId';
                MovieGenresRow.localTextPrefix = 'MovieDB.MovieGenres';
                MovieGenresRow.deletePermission = 'Administration:General';
                MovieGenresRow.insertPermission = 'Administration:General';
                MovieGenresRow.readPermission = 'Administration:General';
                MovieGenresRow.updatePermission = 'Administration:General';
            })(MovieGenresRow = MovieDB.MovieGenresRow || (MovieDB.MovieGenresRow = {}));
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieGenresService;
            (function (MovieGenresService) {
                MovieGenresService.baseUrl = 'MovieDB/MovieGenres';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    MovieGenresService[x] = function (r, s, o) {
                        return Q.serviceRequest(MovieGenresService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(MovieGenresService = MovieDB.MovieGenresService || (MovieDB.MovieGenresService = {}));
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieRow;
            (function (MovieRow) {
                MovieRow.idProperty = 'MovieId';
                MovieRow.nameProperty = 'Title';
                MovieRow.localTextPrefix = 'MovieDB.Movie';
                MovieRow.deletePermission = 'Administration:General';
                MovieRow.insertPermission = 'Administration:General';
                MovieRow.readPermission = 'Administration:General';
                MovieRow.updatePermission = 'Administration:General';
            })(MovieRow = MovieDB.MovieRow || (MovieDB.MovieRow = {}));
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieService;
            (function (MovieService) {
                MovieService.baseUrl = 'MovieDB/Movie';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    MovieService[x] = function (r, s, o) {
                        return Q.serviceRequest(MovieService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(MovieService = MovieDB.MovieService || (MovieDB.MovieService = {}));
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieKind;
    (function (MovieKind) {
        MovieKind[MovieKind["Film"] = 1] = "Film";
        MovieKind[MovieKind["TvSeries"] = 2] = "TvSeries";
        MovieKind[MovieKind["MiniSeries"] = 3] = "MiniSeries";
    })(MovieKind = MovieTutorial.MovieKind || (MovieTutorial.MovieKind = {}));
    Serenity.Decorators.registerEnumType(MovieKind, 'MovieTutorial.MovieKind', 'MovieDB.MovieKind');
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Texts;
        (function (Texts) {
            MovieTutorial.Web['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, MovieDB: { Genre: { GenreId: 1, Name: 1 }, Movie: { CastList: 1, Description: 1, GenreList: 1, Kind: 1, MovieId: 1, ReleaseDate: 1, Runtime: 1, Storyline: 1, Title: 1, Year: 1 }, MovieCast: { Character: 1, MovieCastId: 1, MovieDescription: 1, MovieId: 1, MovieKind: 1, MovieReleaseDate: 1, MovieRuntime: 1, MovieStoryline: 1, MovieTitle: 1, MovieYear: 1, PersonBirthPlace: 1, PersonBirthdate: 1, PersonFirstName: 1, PersonFullname: 1, PersonGender: 1, PersonHeight: 1, PersonId: 1, PersonLastname: 1 }, MovieGenres: { GenreId: 1, GenreName: 1, MovieDescription: 1, MovieGenreId: 1, MovieId: 1, MovieKind: 1, MovieReleaseDate: 1, MovieRuntime: 1, MovieStoryline: 1, MovieTitle: 1, MovieYear: 1 }, Person: { BirthPlace: 1, Birthdate: 1, FirstName: 1, Fullname: 1, Gender: 1, Height: 1, Lastname: 1, PersonId: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, GoogleButton: 1, LoginToYourAccount: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
        })(Texts = Web.Texts || (Web.Texts = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var LanguageDialog = /** @class */ (function (_super) {
                __extends(LanguageDialog, _super);
                function LanguageDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Administration.LanguageForm(_this.idPrefix);
                    return _this;
                }
                LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
                LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
                LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
                LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
                LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
                LanguageDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], LanguageDialog);
                return LanguageDialog;
            }(Serenity.EntityDialog));
            Administration.LanguageDialog = LanguageDialog;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var LanguageGrid = /** @class */ (function (_super) {
                __extends(LanguageGrid, _super);
                function LanguageGrid(container) {
                    return _super.call(this, container) || this;
                }
                LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
                LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
                LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
                LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
                LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
                LanguageGrid.prototype.getDefaultSortBy = function () {
                    return ["LanguageName" /* LanguageRow.Fields.LanguageName */];
                };
                LanguageGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], LanguageGrid);
                return LanguageGrid;
            }(Serenity.EntityGrid));
            Administration.LanguageGrid = LanguageGrid;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var RoleDialog = /** @class */ (function (_super) {
                __extends(RoleDialog, _super);
                function RoleDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Administration.RoleForm(_this.idPrefix);
                    return _this;
                }
                RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
                RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
                RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
                RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
                RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
                RoleDialog.prototype.getToolbarButtons = function () {
                    var _this = this;
                    var buttons = _super.prototype.getToolbarButtons.call(this);
                    buttons.push({
                        title: Q.text('Site.RolePermissionDialog.EditButton'),
                        cssClass: 'edit-permissions-button',
                        icon: 'fa-lock text-green',
                        onClick: function () {
                            new Administration.RolePermissionDialog({
                                roleID: _this.entity.RoleId,
                                title: _this.entity.RoleName
                            }).dialogOpen();
                        }
                    });
                    return buttons;
                };
                RoleDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
                };
                RoleDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], RoleDialog);
                return RoleDialog;
            }(Serenity.EntityDialog));
            Administration.RoleDialog = RoleDialog;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var RoleGrid = /** @class */ (function (_super) {
                __extends(RoleGrid, _super);
                function RoleGrid(container) {
                    return _super.call(this, container) || this;
                }
                RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
                RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
                RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
                RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
                RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
                RoleGrid.prototype.getDefaultSortBy = function () {
                    return ["RoleName" /* RoleRow.Fields.RoleName */];
                };
                RoleGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], RoleGrid);
                return RoleGrid;
            }(Serenity.EntityGrid));
            Administration.RoleGrid = RoleGrid;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var RolePermissionDialog = /** @class */ (function (_super) {
                __extends(RolePermissionDialog, _super);
                function RolePermissionDialog(opt) {
                    var _this = _super.call(this, opt) || this;
                    _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                        showRevoke: false
                    });
                    Administration.RolePermissionService.List({
                        RoleID: _this.options.roleID,
                        Module: null,
                        Submodule: null
                    }, function (response) {
                        _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                    });
                    _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                    return _this;
                }
                RolePermissionDialog.prototype.getDialogOptions = function () {
                    var _this = this;
                    var opt = _super.prototype.getDialogOptions.call(this);
                    opt.buttons = [
                        {
                            text: Q.text('Dialogs.OkButton'),
                            click: function (e) {
                                Administration.RolePermissionService.Update({
                                    RoleID: _this.options.roleID,
                                    Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                    Module: null,
                                    Submodule: null
                                }, function (response) {
                                    _this.dialogClose();
                                    window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                                });
                            }
                        }, {
                            text: Q.text('Dialogs.CancelButton'),
                            click: function () { return _this.dialogClose(); }
                        }
                    ];
                    opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                    return opt;
                };
                RolePermissionDialog.prototype.getTemplate = function () {
                    return '<div id="~_Permissions"></div>';
                };
                RolePermissionDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], RolePermissionDialog);
                return RolePermissionDialog;
            }(Serenity.TemplatedDialog));
            Administration.RolePermissionDialog = RolePermissionDialog;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var TranslationGrid = /** @class */ (function (_super) {
                __extends(TranslationGrid, _super);
                function TranslationGrid(container) {
                    var _this = _super.call(this, container) || this;
                    _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                        var value = Q.trimToNull($(e.target).val());
                        if (value === '') {
                            value = null;
                        }
                        _this.view.getItemById($(e.target).data('key')).CustomText = value;
                        _this.hasChanges = true;
                    });
                    return _this;
                }
                TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
                TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
                TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
                TranslationGrid.prototype.onClick = function (e, row, cell) {
                    var _this = this;
                    _super.prototype.onClick.call(this, e, row, cell);
                    if (e.isDefaultPrevented()) {
                        return;
                    }
                    var item = this.itemAt(row);
                    var done;
                    if ($(e.target).hasClass('source-text')) {
                        e.preventDefault();
                        done = function () {
                            item.CustomText = item.SourceText;
                            _this.view.updateItem(item.Key, item);
                            _this.hasChanges = true;
                        };
                        if (Q.isTrimmedEmpty(item.CustomText) ||
                            (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                            done();
                            return;
                        }
                        Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                        return;
                    }
                    if ($(e.target).hasClass('target-text')) {
                        e.preventDefault();
                        done = function () {
                            item.CustomText = item.TargetText;
                            _this.view.updateItem(item.Key, item);
                            _this.hasChanges = true;
                        };
                        if (Q.isTrimmedEmpty(item.CustomText) ||
                            (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                            done();
                            return;
                        }
                        Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                        return;
                    }
                };
                TranslationGrid.prototype.getColumns = function () {
                    var columns = [];
                    columns.push({ field: 'Key', width: 300, sortable: false });
                    columns.push({
                        field: 'SourceText',
                        width: 300,
                        sortable: false,
                        format: function (ctx) {
                            return Q.outerHtml($('<a/>')
                                .addClass('source-text')
                                .text(ctx.value || ''));
                        }
                    });
                    columns.push({
                        field: 'CustomText',
                        width: 300,
                        sortable: false,
                        format: function (ctx) { return Q.outerHtml($('<input/>')
                            .addClass('custom-text')
                            .attr('value', ctx.value)
                            .attr('type', 'text')
                            .attr('data-key', ctx.item.Key)); }
                    });
                    columns.push({
                        field: 'TargetText',
                        width: 300,
                        sortable: false,
                        format: function (ctx) { return Q.outerHtml($('<a/>')
                            .addClass('target-text')
                            .text(ctx.value || '')); }
                    });
                    return columns;
                };
                TranslationGrid.prototype.createToolbarExtensions = function () {
                    var _this = this;
                    _super.prototype.createToolbarExtensions.call(this);
                    var opt = {
                        lookupKey: 'Administration.Language'
                    };
                    this.sourceLanguage = Serenity.Widget.create({
                        type: Serenity.LookupEditor,
                        element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                            Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                        options: opt
                    });
                    this.sourceLanguage.changeSelect2(function (e) {
                        if (_this.hasChanges) {
                            _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                        }
                        else {
                            _this.refresh();
                        }
                    });
                    this.targetLanguage = Serenity.Widget.create({
                        type: Serenity.LookupEditor,
                        element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                            Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                        options: opt
                    });
                    this.targetLanguage.changeSelect2(function (e) {
                        if (_this.hasChanges) {
                            _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                        }
                        else {
                            _this.refresh();
                        }
                    });
                };
                TranslationGrid.prototype.saveChanges = function (language) {
                    var _this = this;
                    var translations = {};
                    for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        translations[item.Key] = item.CustomText;
                    }
                    return Promise.resolve(Administration.TranslationService.Update({
                        TargetLanguageID: language,
                        Translations: translations
                    })).then(function () {
                        _this.hasChanges = false;
                        language = Q.trimToNull(language) || 'invariant';
                        Q.notifySuccess('User translations in "' + language +
                            '" language are saved to "user.texts.' +
                            language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                    });
                };
                TranslationGrid.prototype.onViewSubmit = function () {
                    var request = this.view.params;
                    request.SourceLanguageID = this.sourceLanguage.value;
                    this.targetLanguageKey = this.targetLanguage.value || '';
                    request.TargetLanguageID = this.targetLanguageKey;
                    this.hasChanges = false;
                    return _super.prototype.onViewSubmit.call(this);
                };
                TranslationGrid.prototype.getButtons = function () {
                    var _this = this;
                    return [{
                            title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                            onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                            cssClass: 'apply-changes-button'
                        }];
                };
                TranslationGrid.prototype.createQuickSearchInput = function () {
                    var _this = this;
                    Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                        _this.searchText = searchText;
                        _this.view.setItems(_this.view.getItems(), true);
                    });
                };
                TranslationGrid.prototype.onViewFilter = function (item) {
                    if (!_super.prototype.onViewFilter.call(this, item)) {
                        return false;
                    }
                    if (!this.searchText) {
                        return true;
                    }
                    var sd = Select2.util.stripDiacritics;
                    var searching = sd(this.searchText).toLowerCase();
                    function match(str) {
                        if (!str)
                            return false;
                        return str.toLowerCase().indexOf(searching) >= 0;
                    }
                    return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                        match(item.TargetText) || match(item.CustomText);
                };
                TranslationGrid.prototype.usePager = function () {
                    return false;
                };
                TranslationGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], TranslationGrid);
                return TranslationGrid;
            }(Serenity.EntityGrid));
            Administration.TranslationGrid = TranslationGrid;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var UserDialog = /** @class */ (function (_super) {
                __extends(UserDialog, _super);
                function UserDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Administration.UserForm(_this.idPrefix);
                    _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.Password.value.length < 7)
                            return "Password must be at least 7 characters!";
                    });
                    _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                            return "The passwords entered doesn't match!";
                    });
                    return _this;
                }
                UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
                UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
                UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
                UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
                UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
                UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
                UserDialog.prototype.getToolbarButtons = function () {
                    var _this = this;
                    var buttons = _super.prototype.getToolbarButtons.call(this);
                    buttons.push({
                        title: Q.text('Site.UserDialog.EditRolesButton'),
                        cssClass: 'edit-roles-button',
                        icon: 'fa-users text-blue',
                        onClick: function () {
                            new Administration.UserRoleDialog({
                                userID: _this.entity.UserId,
                                username: _this.entity.Username
                            }).dialogOpen();
                        }
                    });
                    buttons.push({
                        title: Q.text('Site.UserDialog.EditPermissionsButton'),
                        cssClass: 'edit-permissions-button',
                        icon: 'fa-lock text-green',
                        onClick: function () {
                            new Administration.UserPermissionDialog({
                                userID: _this.entity.UserId,
                                username: _this.entity.Username
                            }).dialogOpen();
                        }
                    });
                    return buttons;
                };
                UserDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                    this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
                };
                UserDialog.prototype.afterLoadEntity = function () {
                    _super.prototype.afterLoadEntity.call(this);
                    // these fields are only required in new record mode
                    this.form.Password.element.toggleClass('required', this.isNew())
                        .closest('.field').find('sup').toggle(this.isNew());
                    this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                        .closest('.field').find('sup').toggle(this.isNew());
                };
                UserDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], UserDialog);
                return UserDialog;
            }(Serenity.EntityDialog));
            Administration.UserDialog = UserDialog;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var UserGrid = /** @class */ (function (_super) {
                __extends(UserGrid, _super);
                function UserGrid(container) {
                    return _super.call(this, container) || this;
                }
                UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
                UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
                UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
                UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
                UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
                UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
                UserGrid.prototype.getDefaultSortBy = function () {
                    return ["Username" /* UserRow.Fields.Username */];
                };
                UserGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], UserGrid);
                return UserGrid;
            }(Serenity.EntityGrid));
            Administration.UserGrid = UserGrid;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Authorization;
        (function (Authorization) {
            Object.defineProperty(Authorization, 'userDefinition', {
                get: function () {
                    return Q.getRemoteData('UserData');
                }
            });
            function hasPermission(permissionKey) {
                return Q.Authorization.hasPermission(permissionKey);
            }
            Authorization.hasPermission = hasPermission;
        })(Authorization = Web.Authorization || (Web.Authorization = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var PermissionCheckEditor = /** @class */ (function (_super) {
                __extends(PermissionCheckEditor, _super);
                function PermissionCheckEditor(container, opt) {
                    var _this = _super.call(this, container, opt) || this;
                    _this._rolePermissions = {};
                    _this._implicitPermissions = {};
                    var titleByKey = {};
                    var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                    var items = permissionKeys.map(function (key) { return ({
                        Key: key,
                        ParentKey: _this.getParentKey(key),
                        Title: titleByKey[key],
                        GrantRevoke: null,
                        IsGroup: key.charAt(key.length - 1) === ':'
                    }); });
                    _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                    _this.setItems(items);
                    return _this;
                }
                PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
                PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                    if (!item.IsGroup) {
                        return ((item.GrantRevoke === grant) ? ' checked' : '');
                    }
                    var desc = this.getDescendants(item, true);
                    var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                    if (!granted.length) {
                        return '';
                    }
                    if (desc.length === granted.length) {
                        return 'checked';
                    }
                    return 'checked partial';
                };
                PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                    if (this._rolePermissions[key])
                        return true;
                    for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                        var k = _a[_i];
                        var d = this._implicitPermissions[k];
                        if (d && d[key])
                            return true;
                    }
                    for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                        var i = _c[_b];
                        var item = this.view.getItemById(i);
                        if (item && item.GrantRevoke == true) {
                            var d = this._implicitPermissions[i];
                            if (d && d[key])
                                return true;
                        }
                    }
                };
                PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                    var _this = this;
                    if (item.IsGroup) {
                        var desc = this.getDescendants(item, true);
                        var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                            (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                        if (grantCount === desc.length || desc.length === 0) {
                            return 'allow';
                        }
                        if (grantCount === 0) {
                            return 'deny';
                        }
                        return 'partial';
                    }
                    var granted = item.GrantRevoke === true ||
                        (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                    return (granted ? ' allow' : ' deny');
                };
                PermissionCheckEditor.prototype.getColumns = function () {
                    var _this = this;
                    var columns = [{
                            name: Q.text('Site.UserPermissionDialog.Permission'),
                            field: 'Title',
                            format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                                var item = ctx.item;
                                var klass = _this.getItemEffectiveClass(item);
                                return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                            }),
                            width: 495,
                            sortable: false
                        }, {
                            name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                            format: function (ctx) {
                                var item1 = ctx.item;
                                var klass1 = _this.getItemGrantRevokeClass(item1, true);
                                return "<span class='check-box grant no-float " + klass1 + "'></span>";
                            },
                            width: 65,
                            sortable: false,
                            headerCssClass: 'align-center',
                            cssClass: 'align-center'
                        }];
                    if (this.options.showRevoke) {
                        columns.push({
                            name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                            format: function (ctx) {
                                var item2 = ctx.item;
                                var klass2 = _this.getItemGrantRevokeClass(item2, false);
                                return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                            },
                            width: 65,
                            sortable: false,
                            headerCssClass: 'align-center',
                            cssClass: 'align-center'
                        });
                    }
                    return columns;
                };
                PermissionCheckEditor.prototype.setItems = function (items) {
                    Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                    this.view.setItems(items, true);
                };
                PermissionCheckEditor.prototype.onViewSubmit = function () {
                    return false;
                };
                PermissionCheckEditor.prototype.onViewFilter = function (item) {
                    var _this = this;
                    if (!_super.prototype.onViewFilter.call(this, item)) {
                        return false;
                    }
                    if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                        return false;
                    if (this.searchText) {
                        return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                    }
                    return true;
                };
                PermissionCheckEditor.prototype.matchContains = function (item) {
                    return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
                };
                PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                    var result = [];
                    var stack = [item];
                    while (stack.length > 0) {
                        var i = stack.pop();
                        var children = this.byParentKey[i.Key];
                        if (!children)
                            continue;
                        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                            var child = children_1[_i];
                            if (!excludeGroups || !child.IsGroup) {
                                result.push(child);
                            }
                            stack.push(child);
                        }
                    }
                    return result;
                };
                PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                    _super.prototype.onClick.call(this, e, row, cell);
                    if (!e.isDefaultPrevented()) {
                        Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                    }
                    if (e.isDefaultPrevented()) {
                        return;
                    }
                    var target = $(e.target);
                    var grant = target.hasClass('grant');
                    if (grant || target.hasClass('revoke')) {
                        e.preventDefault();
                        var item = this.itemAt(row);
                        var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                        if (checkedOrPartial) {
                            grant = null;
                        }
                        else {
                            grant = grant !== checkedOrPartial;
                        }
                        if (item.IsGroup) {
                            for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                                var d = _a[_i];
                                d.GrantRevoke = grant;
                            }
                        }
                        else
                            item.GrantRevoke = grant;
                        this.slickGrid.invalidate();
                    }
                };
                PermissionCheckEditor.prototype.getParentKey = function (key) {
                    if (key.charAt(key.length - 1) === ':') {
                        key = key.substr(0, key.length - 1);
                    }
                    var idx = key.lastIndexOf(':');
                    if (idx >= 0) {
                        return key.substr(0, idx + 1);
                    }
                    return null;
                };
                PermissionCheckEditor.prototype.getButtons = function () {
                    return [];
                };
                PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                    var _this = this;
                    _super.prototype.createToolbarExtensions.call(this);
                    Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                        _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                        _this.view.setItems(_this.view.getItems(), true);
                    });
                };
                PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                    var keys = Q.getRemoteData('Administration.PermissionKeys');
                    var titleWithGroup = {};
                    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                        var k = keys_1[_i];
                        var s = k;
                        if (!s) {
                            continue;
                        }
                        if (s.charAt(s.length - 1) == ':') {
                            s = s.substr(0, s.length - 1);
                            if (s.length === 0) {
                                continue;
                            }
                        }
                        if (titleByKey[s]) {
                            continue;
                        }
                        titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                        var parts = s.split(':');
                        var group = '';
                        var groupTitle = '';
                        for (var i = 0; i < parts.length - 1; i++) {
                            group = group + parts[i] + ':';
                            var txt = Q.tryGetText('Permission.' + group);
                            if (txt == null) {
                                txt = parts[i];
                            }
                            titleByKey[group] = txt;
                            groupTitle = groupTitle + titleByKey[group] + ':';
                            titleWithGroup[group] = groupTitle;
                        }
                        titleWithGroup[s] = groupTitle + titleByKey[s];
                    }
                    keys = Object.keys(titleByKey);
                    keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                    return keys;
                };
                Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                    get: function () {
                        var result = [];
                        for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                                result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                            }
                        }
                        return result;
                    },
                    set: function (value) {
                        for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                            var item = _a[_i];
                            item.GrantRevoke = null;
                        }
                        if (value != null) {
                            for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                                var row = value_1[_b];
                                var r = this.view.getItemById(row.PermissionKey);
                                if (r) {
                                    r.GrantRevoke = Q.coalesce(row.Granted, true);
                                }
                            }
                        }
                        this.setItems(this.getItems());
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                    get: function () {
                        return Object.keys(this._rolePermissions);
                    },
                    set: function (value) {
                        this._rolePermissions = {};
                        if (value) {
                            for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                                var k = value_2[_i];
                                this._rolePermissions[k] = true;
                            }
                        }
                        this.setItems(this.getItems());
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                    set: function (value) {
                        this._implicitPermissions = {};
                        if (value) {
                            for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                                var k = _a[_i];
                                this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                                var l = value[k];
                                if (l) {
                                    for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                        var s = l_1[_b];
                                        this._implicitPermissions[k][s] = true;
                                    }
                                }
                            }
                        }
                    },
                    enumerable: false,
                    configurable: true
                });
                PermissionCheckEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
                ], PermissionCheckEditor);
                return PermissionCheckEditor;
            }(Serenity.DataGrid));
            Administration.PermissionCheckEditor = PermissionCheckEditor;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var UserPermissionDialog = /** @class */ (function (_super) {
                __extends(UserPermissionDialog, _super);
                function UserPermissionDialog(opt) {
                    var _this = _super.call(this, opt) || this;
                    _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                        showRevoke: true
                    });
                    Administration.UserPermissionService.List({
                        UserID: _this.options.userID,
                        Module: null,
                        Submodule: null
                    }, function (response) {
                        _this.permissions.value = response.Entities;
                    });
                    Administration.UserPermissionService.ListRolePermissions({
                        UserID: _this.options.userID,
                        Module: null,
                        Submodule: null,
                    }, function (response) {
                        _this.permissions.rolePermissions = response.Entities;
                    });
                    _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                    return _this;
                }
                UserPermissionDialog.prototype.getDialogOptions = function () {
                    var _this = this;
                    var opt = _super.prototype.getDialogOptions.call(this);
                    opt.buttons = [
                        {
                            text: Q.text('Dialogs.OkButton'),
                            cssClass: 'btn btn-primary',
                            click: function (e) {
                                Administration.UserPermissionService.Update({
                                    UserID: _this.options.userID,
                                    Permissions: _this.permissions.value,
                                    Module: null,
                                    Submodule: null
                                }, function (response) {
                                    _this.dialogClose();
                                    window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                                });
                            }
                        }, {
                            text: Q.text('Dialogs.CancelButton'),
                            click: function () { return _this.dialogClose(); }
                        }
                    ];
                    opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                    return opt;
                };
                UserPermissionDialog.prototype.getTemplate = function () {
                    return '<div id="~_Permissions"></div>';
                };
                UserPermissionDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], UserPermissionDialog);
                return UserPermissionDialog;
            }(Serenity.TemplatedDialog));
            Administration.UserPermissionDialog = UserPermissionDialog;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var RoleCheckEditor = /** @class */ (function (_super) {
                __extends(RoleCheckEditor, _super);
                function RoleCheckEditor(div) {
                    return _super.call(this, div) || this;
                }
                RoleCheckEditor.prototype.createToolbarExtensions = function () {
                    var _this = this;
                    _super.prototype.createToolbarExtensions.call(this);
                    Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                        _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                        _this.view.setItems(_this.view.getItems(), true);
                    });
                };
                RoleCheckEditor.prototype.getButtons = function () {
                    return [];
                };
                RoleCheckEditor.prototype.getTreeItems = function () {
                    return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                        id: role.RoleId.toString(),
                        text: role.RoleName
                    }); });
                };
                RoleCheckEditor.prototype.onViewFilter = function (item) {
                    return _super.prototype.onViewFilter.call(this, item) &&
                        (Q.isEmptyOrNull(this.searchText) ||
                            Select2.util.stripDiacritics(item.text || '')
                                .toUpperCase().indexOf(this.searchText) >= 0);
                };
                RoleCheckEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], RoleCheckEditor);
                return RoleCheckEditor;
            }(Serenity.CheckTreeEditor));
            Administration.RoleCheckEditor = RoleCheckEditor;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Administration;
        (function (Administration) {
            var UserRoleDialog = /** @class */ (function (_super) {
                __extends(UserRoleDialog, _super);
                function UserRoleDialog(opt) {
                    var _this = _super.call(this, opt) || this;
                    _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                    Administration.UserRoleService.List({
                        UserID: _this.options.userID
                    }, function (response) {
                        _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                    });
                    return _this;
                }
                UserRoleDialog.prototype.getDialogOptions = function () {
                    var _this = this;
                    var opt = _super.prototype.getDialogOptions.call(this);
                    opt.buttons = [{
                            text: Q.text('Dialogs.OkButton'),
                            cssClass: 'btn btn-primary',
                            click: function () {
                                Q.serviceRequest('Administration/UserRole/Update', {
                                    UserID: _this.options.userID,
                                    Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                                }, function (response) {
                                    _this.dialogClose();
                                    Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                                });
                            }
                        }, {
                            text: Q.text('Dialogs.CancelButton'),
                            click: function () { return _this.dialogClose(); }
                        }];
                    opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                    return opt;
                };
                UserRoleDialog.prototype.getTemplate = function () {
                    return "<div id='~_Roles'></div>";
                };
                UserRoleDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], UserRoleDialog);
                return UserRoleDialog;
            }(Serenity.TemplatedDialog));
            Administration.UserRoleDialog = UserRoleDialog;
        })(Administration = Web.Administration || (Web.Administration = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var LanguageList;
        (function (LanguageList) {
            function getValue() {
                var result = [];
                for (var _i = 0, _a = Web.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                    var k = _a[_i];
                    if (k.LanguageId !== 'en') {
                        result.push([k.Id.toString(), k.LanguageName]);
                    }
                }
                return result;
            }
            LanguageList.getValue = getValue;
        })(LanguageList = Web.LanguageList || (Web.LanguageList = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var ScriptInitialization;
        (function (ScriptInitialization) {
            Q.Config.responsiveDialogs = true;
            Q.Config.rootNamespaces.push('MovieTutorial.Web');
            Serenity.EntityDialog.defaultLanguageList = Web.LanguageList.getValue;
            Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
            if ($.fn['colorbox']) {
                $.fn['colorbox'].settings.maxWidth = "95%";
                $.fn['colorbox'].settings.maxHeight = "95%";
            }
            window.onerror = Q.ErrorHandling.runtimeErrorHandler;
        })(ScriptInitialization = Web.ScriptInitialization || (Web.ScriptInitialization = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Common;
        (function (Common) {
            var SidebarSearch = /** @class */ (function (_super) {
                __extends(SidebarSearch, _super);
                function SidebarSearch(input, menuUL) {
                    var _this = _super.call(this, input) || this;
                    new Serenity.QuickSearchInput(input, {
                        onSearch: function (field, text, success) {
                            _this.updateMatchFlags(text);
                            success(true);
                        }
                    });
                    _this.menuUL = menuUL;
                    return _this;
                }
                SidebarSearch.prototype.updateMatchFlags = function (text) {
                    var liList = this.menuUL.find('li').removeClass('non-match');
                    text = Q.trimToNull(text);
                    if (text == null) {
                        liList.show();
                        liList.removeClass('expanded');
                        return;
                    }
                    var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                    for (var i = 0; i < parts.length; i++) {
                        parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                    }
                    var items = liList;
                    items.each(function (idx, e) {
                        var x = $(e);
                        var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                            var p = parts_1[_i];
                            if (p != null && !(title.indexOf(p) !== -1)) {
                                x.addClass('non-match');
                                break;
                            }
                        }
                    });
                    var matchingItems = items.not('.non-match');
                    var visibles = matchingItems.parents('li').add(matchingItems);
                    var nonVisibles = liList.not(visibles);
                    nonVisibles.hide().addClass('non-match');
                    visibles.show();
                    liList.addClass('expanded');
                };
                return SidebarSearch;
            }(Serenity.Widget));
            Common.SidebarSearch = SidebarSearch;
        })(Common = Web.Common || (Web.Common = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Membership;
        (function (Membership) {
            var LoginPanel = /** @class */ (function (_super) {
                __extends(LoginPanel, _super);
                function LoginPanel(container) {
                    var _this = _super.call(this, container) || this;
                    _this.byId('LoginButton').click(function (e) {
                        e.preventDefault();
                        if (!_this.validateForm()) {
                            return;
                        }
                        var request = _this.getSaveEntity();
                        Q.serviceCall({
                            url: Q.resolveUrl('~/Account/Login'),
                            request: request,
                            onSuccess: function (response) {
                                _this.redirectToReturnUrl();
                            },
                            onError: function (response) {
                                if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                    window.location.href = response.Error.Arguments;
                                    return;
                                }
                                if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                    Q.notifyError(response.Error.Message);
                                    $('#Password').focus();
                                    return;
                                }
                                Q.ErrorHandling.showServiceError(response.Error);
                            }
                        });
                    });
                    return _this;
                }
                LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
                LoginPanel.prototype.redirectToReturnUrl = function () {
                    var q = Q.parseQueryString();
                    var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                    if (returnUrl) {
                        var hash = window.location.hash;
                        if (hash != null && hash != '#')
                            returnUrl += hash;
                        window.location.href = returnUrl;
                    }
                    else {
                        window.location.href = Q.resolveUrl('~/');
                    }
                };
                LoginPanel.prototype.getTemplate = function () {
                    return "\n    <h2 class=\"text-center p-4\">\n        <img src=\"".concat(Q.resolveUrl("~/Content/site/images/serenity-logo-w-128.png"), "\"\n            class=\"rounded-circle p-1\" style=\"background-color: var(--s-sidebar-band-bg)\"\n            width=\"50\" height=\"50\" /> MovieTutorial.Web\n    </h2>\n\n    <div class=\"s-Panel p-4\">\n        <h5 class=\"text-center my-4\">").concat(Q.text("Forms.Membership.Login.LoginToYourAccount"), "</h5>\n        <form id=\"~_Form\" action=\"\">\n            <div id=\"~_PropertyGrid\"></div>\n            <div class=\"px-field\">\n                <a class=\"float-end text-decoration-none\" href=\"").concat(Q.resolveUrl('~/Account/ForgotPassword'), "\">\n                    ").concat(Q.text("Forms.Membership.Login.ForgotPassword"), "\n                </a>\n            </div>\n            <div class=\"px-field\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary my-3 w-100\">\n                    ").concat(Q.text("Forms.Membership.Login.SignInButton"), "\n                </button>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"text-center mt-2\">\n        <a class=\"text-decoration-none\" href=\"").concat(Q.resolveUrl('~/Account/SignUp'), "\">").concat(Q.text("Forms.Membership.Login.SignUpButton"), "</a>\n    </div>   \n");
                };
                LoginPanel = __decorate([
                    Serenity.Decorators.registerClass()
                ], LoginPanel);
                return LoginPanel;
            }(Serenity.PropertyPanel));
            Membership.LoginPanel = LoginPanel;
        })(Membership = Web.Membership || (Web.Membership = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Membership;
        (function (Membership) {
            var ChangePasswordPanel = /** @class */ (function (_super) {
                __extends(ChangePasswordPanel, _super);
                function ChangePasswordPanel(container) {
                    var _this = _super.call(this, container) || this;
                    _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                    _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                            return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                        }
                    });
                    _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                            return Q.text('Validation.PasswordConfirm');
                        }
                    });
                    _this.byId('SubmitButton').click(function (e) {
                        e.preventDefault();
                        if (!_this.validateForm()) {
                            return;
                        }
                        var request = _this.getSaveEntity();
                        Q.serviceCall({
                            url: Q.resolveUrl('~/Account/ChangePassword'),
                            request: request,
                            onSuccess: function (response) {
                                Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                    window.location.href = Q.resolveUrl('~/');
                                });
                            }
                        });
                    });
                    return _this;
                }
                ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
                ChangePasswordPanel.prototype.getTemplate = function () {
                    return "<div class=\"s-Panel\">\n    <h3 class=\"page-title mb-4 text-center\">".concat(Q.text("Forms.Membership.ChangePassword.FormTitle"), "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div id=\"~_PropertyGrid\"></div>\n        <div class=\"px-field mt-4\">\n            <button id=\"~_SubmitButton\" type=\"submit\" class=\"btn btn-primary w-100\">\n                ").concat(Q.text("Forms.Membership.ChangePassword.SubmitButton"), "\n            </button>\n        </div>\n    </form>\n</div>");
                };
                ChangePasswordPanel = __decorate([
                    Serenity.Decorators.registerClass()
                ], ChangePasswordPanel);
                return ChangePasswordPanel;
            }(Serenity.PropertyPanel));
            Membership.ChangePasswordPanel = ChangePasswordPanel;
        })(Membership = Web.Membership || (Web.Membership = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Membership;
        (function (Membership) {
            var ForgotPasswordPanel = /** @class */ (function (_super) {
                __extends(ForgotPasswordPanel, _super);
                function ForgotPasswordPanel(container) {
                    var _this = _super.call(this, container) || this;
                    _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                    _this.byId('SubmitButton').click(function (e) {
                        e.preventDefault();
                        if (!_this.validateForm()) {
                            return;
                        }
                        var request = _this.getSaveEntity();
                        Q.serviceCall({
                            url: Q.resolveUrl('~/Account/ForgotPassword'),
                            request: request,
                            onSuccess: function (response) {
                                Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                    window.location.href = Q.resolveUrl('~/');
                                });
                            }
                        });
                    });
                    return _this;
                }
                ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
                ForgotPasswordPanel = __decorate([
                    Serenity.Decorators.registerClass()
                ], ForgotPasswordPanel);
                return ForgotPasswordPanel;
            }(Serenity.PropertyPanel));
            Membership.ForgotPasswordPanel = ForgotPasswordPanel;
        })(Membership = Web.Membership || (Web.Membership = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Membership;
        (function (Membership) {
            var ResetPasswordPanel = /** @class */ (function (_super) {
                __extends(ResetPasswordPanel, _super);
                function ResetPasswordPanel(container) {
                    var _this = _super.call(this, container) || this;
                    _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                    _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.NewPassword.value.length < 7) {
                            return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                        }
                    });
                    _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                            return Q.text('Validation.PasswordConfirm');
                        }
                    });
                    _this.byId('SubmitButton').click(function (e) {
                        e.preventDefault();
                        if (!_this.validateForm()) {
                            return;
                        }
                        var request = _this.getSaveEntity();
                        request.Token = _this.byId('Token').val();
                        Q.serviceCall({
                            url: Q.resolveUrl('~/Account/ResetPassword'),
                            request: request,
                            onSuccess: function (response) {
                                Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                    window.location.href = Q.resolveUrl('~/Account/Login');
                                });
                            }
                        });
                    });
                    return _this;
                }
                ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
                ResetPasswordPanel = __decorate([
                    Serenity.Decorators.registerClass()
                ], ResetPasswordPanel);
                return ResetPasswordPanel;
            }(Serenity.PropertyPanel));
            Membership.ResetPasswordPanel = ResetPasswordPanel;
        })(Membership = Web.Membership || (Web.Membership = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var Membership;
        (function (Membership) {
            var SignUpPanel = /** @class */ (function (_super) {
                __extends(SignUpPanel, _super);
                function SignUpPanel(container) {
                    var _this = _super.call(this, container) || this;
                    _this.form = new Membership.SignUpForm(_this.idPrefix);
                    _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                            return Q.text('Validation.EmailConfirm');
                        }
                    });
                    _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                            return Q.text('Validation.PasswordConfirm');
                        }
                    });
                    _this.byId('SubmitButton').click(function (e) {
                        e.preventDefault();
                        if (!_this.validateForm()) {
                            return;
                        }
                        Q.serviceCall({
                            url: Q.resolveUrl('~/Account/SignUp'),
                            request: {
                                DisplayName: _this.form.DisplayName.value,
                                Email: _this.form.Email.value,
                                Password: _this.form.Password.value
                            },
                            onSuccess: function (response) {
                                Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                    window.location.href = Q.resolveUrl('~/');
                                });
                            }
                        });
                    });
                    return _this;
                }
                SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
                SignUpPanel = __decorate([
                    Serenity.Decorators.registerClass()
                ], SignUpPanel);
                return SignUpPanel;
            }(Serenity.PropertyPanel));
            Membership.SignUpPanel = SignUpPanel;
        })(Membership = Web.Membership || (Web.Membership = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var GenreDialog = /** @class */ (function (_super) {
                __extends(GenreDialog, _super);
                function GenreDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new MovieDB.GenreForm(_this.idPrefix);
                    return _this;
                }
                GenreDialog.prototype.getFormKey = function () { return MovieDB.GenreForm.formKey; };
                GenreDialog.prototype.getIdProperty = function () { return MovieDB.GenreRow.idProperty; };
                GenreDialog.prototype.getLocalTextPrefix = function () { return MovieDB.GenreRow.localTextPrefix; };
                GenreDialog.prototype.getNameProperty = function () { return MovieDB.GenreRow.nameProperty; };
                GenreDialog.prototype.getService = function () { return MovieDB.GenreService.baseUrl; };
                GenreDialog.prototype.getDeletePermission = function () { return MovieDB.GenreRow.deletePermission; };
                GenreDialog.prototype.getInsertPermission = function () { return MovieDB.GenreRow.insertPermission; };
                GenreDialog.prototype.getUpdatePermission = function () { return MovieDB.GenreRow.updatePermission; };
                GenreDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], GenreDialog);
                return GenreDialog;
            }(Serenity.EntityDialog));
            MovieDB.GenreDialog = GenreDialog;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var GenreGrid = /** @class */ (function (_super) {
                __extends(GenreGrid, _super);
                function GenreGrid(container) {
                    return _super.call(this, container) || this;
                }
                GenreGrid.prototype.getColumnsKey = function () { return MovieDB.GenreColumns.columnsKey; };
                GenreGrid.prototype.getDialogType = function () { return MovieDB.GenreDialog; };
                GenreGrid.prototype.getIdProperty = function () { return MovieDB.GenreRow.idProperty; };
                GenreGrid.prototype.getInsertPermission = function () { return MovieDB.GenreRow.insertPermission; };
                GenreGrid.prototype.getLocalTextPrefix = function () { return MovieDB.GenreRow.localTextPrefix; };
                GenreGrid.prototype.getService = function () { return MovieDB.GenreService.baseUrl; };
                GenreGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], GenreGrid);
                return GenreGrid;
            }(Serenity.EntityGrid));
            MovieDB.GenreGrid = GenreGrid;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieDialog = /** @class */ (function (_super) {
                __extends(MovieDialog, _super);
                function MovieDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new MovieDB.MovieForm(_this.idPrefix);
                    return _this;
                }
                MovieDialog.prototype.getFormKey = function () { return MovieDB.MovieForm.formKey; };
                MovieDialog.prototype.getIdProperty = function () { return MovieDB.MovieRow.idProperty; };
                MovieDialog.prototype.getLocalTextPrefix = function () { return MovieDB.MovieRow.localTextPrefix; };
                MovieDialog.prototype.getNameProperty = function () { return MovieDB.MovieRow.nameProperty; };
                MovieDialog.prototype.getService = function () { return MovieDB.MovieService.baseUrl; };
                MovieDialog.prototype.getDeletePermission = function () { return MovieDB.MovieRow.deletePermission; };
                MovieDialog.prototype.getInsertPermission = function () { return MovieDB.MovieRow.insertPermission; };
                MovieDialog.prototype.getUpdatePermission = function () { return MovieDB.MovieRow.updatePermission; };
                MovieDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], MovieDialog);
                return MovieDialog;
            }(Serenity.EntityDialog));
            MovieDB.MovieDialog = MovieDialog;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieGrid = /** @class */ (function (_super) {
                __extends(MovieGrid, _super);
                function MovieGrid(container) {
                    return _super.call(this, container) || this;
                }
                MovieGrid.prototype.getColumnsKey = function () { return MovieDB.MovieColumns.columnsKey; };
                MovieGrid.prototype.getDialogType = function () { return MovieDB.MovieDialog; };
                MovieGrid.prototype.getIdProperty = function () { return MovieDB.MovieRow.idProperty; };
                MovieGrid.prototype.getInsertPermission = function () { return MovieDB.MovieRow.insertPermission; };
                MovieGrid.prototype.getLocalTextPrefix = function () { return MovieDB.MovieRow.localTextPrefix; };
                MovieGrid.prototype.getService = function () { return MovieDB.MovieService.baseUrl; };
                MovieGrid.prototype.getQuickSearchFields = function () {
                    var txt = function (s) {
                        return Q.text("Db.".concat(MovieDB.MovieRow.localTextPrefix, ".").concat(s)).toLowerCase();
                    };
                    return [
                        { name: "", title: "all" },
                        { name: "Description" /* MovieRow.Fields.Description */, title: txt("Description" /* MovieRow.Fields.Description */) },
                        { name: "Storyline" /* MovieRow.Fields.Storyline */, title: txt("Storyline" /* MovieRow.Fields.Storyline */) },
                        { name: "Year" /* MovieRow.Fields.Year */, title: txt("Year" /* MovieRow.Fields.Year */) }
                    ];
                };
                MovieGrid.prototype.getQuickFilters = function () {
                    var items = _super.prototype.getQuickFilters.call(this);
                    var genreListFilter = Q.first(items, function (x) {
                        return x.field == "GenreList" /* MovieRow.Fields.GenreList */;
                    });
                    genreListFilter.handler = function (h) {
                        var request = h.request;
                        var values = h.widget.values;
                        request.Genres = values.map(function (x) { return parseInt(x, 10); });
                        h.handled = true;
                    };
                    return items;
                };
                MovieGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], MovieGrid);
                return MovieGrid;
            }(Serenity.EntityGrid));
            MovieDB.MovieGrid = MovieGrid;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieGenresDialog = /** @class */ (function (_super) {
                __extends(MovieGenresDialog, _super);
                function MovieGenresDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new MovieDB.MovieGenresForm(_this.idPrefix);
                    return _this;
                }
                MovieGenresDialog.prototype.getFormKey = function () { return MovieDB.MovieGenresForm.formKey; };
                MovieGenresDialog.prototype.getIdProperty = function () { return MovieDB.MovieGenresRow.idProperty; };
                MovieGenresDialog.prototype.getLocalTextPrefix = function () { return MovieDB.MovieGenresRow.localTextPrefix; };
                MovieGenresDialog.prototype.getService = function () { return MovieDB.MovieGenresService.baseUrl; };
                MovieGenresDialog.prototype.getDeletePermission = function () { return MovieDB.MovieGenresRow.deletePermission; };
                MovieGenresDialog.prototype.getInsertPermission = function () { return MovieDB.MovieGenresRow.insertPermission; };
                MovieGenresDialog.prototype.getUpdatePermission = function () { return MovieDB.MovieGenresRow.updatePermission; };
                MovieGenresDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], MovieGenresDialog);
                return MovieGenresDialog;
            }(Serenity.EntityDialog));
            MovieDB.MovieGenresDialog = MovieGenresDialog;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieGenresGrid = /** @class */ (function (_super) {
                __extends(MovieGenresGrid, _super);
                function MovieGenresGrid(container) {
                    return _super.call(this, container) || this;
                }
                MovieGenresGrid.prototype.getColumnsKey = function () { return MovieDB.MovieGenresColumns.columnsKey; };
                MovieGenresGrid.prototype.getDialogType = function () { return MovieDB.MovieGenresDialog; };
                MovieGenresGrid.prototype.getIdProperty = function () { return MovieDB.MovieGenresRow.idProperty; };
                MovieGenresGrid.prototype.getInsertPermission = function () { return MovieDB.MovieGenresRow.insertPermission; };
                MovieGenresGrid.prototype.getLocalTextPrefix = function () { return MovieDB.MovieGenresRow.localTextPrefix; };
                MovieGenresGrid.prototype.getService = function () { return MovieDB.MovieGenresService.baseUrl; };
                MovieGenresGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], MovieGenresGrid);
                return MovieGenresGrid;
            }(Serenity.EntityGrid));
            MovieDB.MovieGenresGrid = MovieGenresGrid;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var GenreListFormatter = /** @class */ (function () {
                function GenreListFormatter() {
                }
                GenreListFormatter.prototype.format = function (ctx) {
                    var idList = ctx.value;
                    if (!idList || !idList.length)
                        return "";
                    var byId = MovieDB.GenreRow.getLookup().itemById;
                    return idList.map(function (x) {
                        var g = byId[x];
                        if (!g)
                            return x.toString();
                        return Q.htmlEncode(g.Name);
                    }).join(", ");
                };
                GenreListFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], GenreListFormatter);
                return GenreListFormatter;
            }());
            MovieDB.GenreListFormatter = GenreListFormatter;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var PersonColumns = /** @class */ (function () {
                function PersonColumns() {
                }
                PersonColumns.columnsKey = 'MovieDB.Person';
                return PersonColumns;
            }());
            MovieDB.PersonColumns = PersonColumns;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var PersonForm = /** @class */ (function (_super) {
                __extends(PersonForm, _super);
                function PersonForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!PersonForm.init) {
                        PersonForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.DateEditor;
                        var w2 = s.EnumEditor;
                        var w3 = s.IntegerEditor;
                        Q.initFormType(PersonForm, [
                            'FirstName', w0,
                            'Lastname', w0,
                            'Birthdate', w1,
                            'BirthPlace', w0,
                            'Gender', w2,
                            'Height', w3
                        ]);
                    }
                    return _this;
                }
                PersonForm.formKey = 'MovieDB.Person';
                return PersonForm;
            }(Serenity.PrefixedContext));
            MovieDB.PersonForm = PersonForm;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var PersonRow;
            (function (PersonRow) {
                PersonRow.idProperty = 'PersonId';
                PersonRow.nameProperty = 'Fullname';
                PersonRow.localTextPrefix = 'MovieDB.Person';
                PersonRow.lookupKey = 'MovieDB.Person';
                function getLookup() {
                    return Q.getLookup('MovieDB.Person');
                }
                PersonRow.getLookup = getLookup;
                PersonRow.deletePermission = 'Administration:General';
                PersonRow.insertPermission = 'Administration:General';
                PersonRow.readPermission = 'Administration:General';
                PersonRow.updatePermission = 'Administration:General';
            })(PersonRow = MovieDB.PersonRow || (MovieDB.PersonRow = {}));
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var PersonService;
            (function (PersonService) {
                PersonService.baseUrl = 'MovieDB/Person';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    PersonService[x] = function (r, s, o) {
                        return Q.serviceRequest(PersonService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(PersonService = MovieDB.PersonService || (MovieDB.PersonService = {}));
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var PersonDialog = /** @class */ (function (_super) {
                __extends(PersonDialog, _super);
                function PersonDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new MovieDB.PersonForm(_this.idPrefix);
                    _this.moviesGrid = new MovieDB.PersonMovieGrid(_this.byId("MoviesGrid"));
                    _this.tabs.on('tabsactivate', function (e, i) {
                        _this.arrange();
                    });
                    return _this;
                }
                PersonDialog.prototype.getFormKey = function () { return MovieDB.PersonForm.formKey; };
                PersonDialog.prototype.getIdProperty = function () { return MovieDB.PersonRow.idProperty; };
                PersonDialog.prototype.getLocalTextPrefix = function () { return MovieDB.PersonRow.localTextPrefix; };
                PersonDialog.prototype.getNameProperty = function () { return MovieDB.PersonRow.nameProperty; };
                PersonDialog.prototype.getService = function () { return MovieDB.PersonService.baseUrl; };
                PersonDialog.prototype.getDeletePermission = function () { return MovieDB.PersonRow.deletePermission; };
                PersonDialog.prototype.getInsertPermission = function () { return MovieDB.PersonRow.insertPermission; };
                PersonDialog.prototype.getUpdatePermission = function () { return MovieDB.PersonRow.updatePermission; };
                PersonDialog.prototype.getTemplate = function () {
                    return "<div id=\"~_Tabs\" class=\"s-DialogContent\">\n        <ul>\n                <li><a href=\"#~_TabInfo\"> <span>Person</span></a></li>\n                <li><a href=\"#~_TabMovies\"><span>Movies</span></a></li>\n        </ul>\n        <div id = \"~_TabInfo\" class=\"tab-pane s-TabInfo\">\n                <div id = \"~_Toolbar\" class=\"s-DialogToolbar\">\n                </div>\n                <div class=\"s-Form\">\n                <form id=\"~_Form\" action = \"\">\n                <div class=\"fieldset\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n                </div>\n                </form>\n                </div>\n                </div>\n                <div id = \"~_TabMovies\" class=\"tab-pane s-TabMovies\">\n                <div id=\"~_MoviesGrid\">\n                </div>\n                </div>\n            </div>";
                };
                PersonDialog.prototype.afterLoadEntity = function () {
                    _super.prototype.afterLoadEntity.call(this);
                    this.moviesGrid.personID = this.entityId;
                };
                PersonDialog = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.responsive()
                ], PersonDialog);
                return PersonDialog;
            }(Serenity.EntityDialog));
            MovieDB.PersonDialog = PersonDialog;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var PersonGrid = /** @class */ (function (_super) {
                __extends(PersonGrid, _super);
                function PersonGrid(container) {
                    return _super.call(this, container) || this;
                }
                PersonGrid.prototype.getColumnsKey = function () { return MovieDB.PersonColumns.columnsKey; };
                PersonGrid.prototype.getDialogType = function () { return MovieDB.PersonDialog; };
                PersonGrid.prototype.getIdProperty = function () { return MovieDB.PersonRow.idProperty; };
                PersonGrid.prototype.getInsertPermission = function () { return MovieDB.PersonRow.insertPermission; };
                PersonGrid.prototype.getLocalTextPrefix = function () { return MovieDB.PersonRow.localTextPrefix; };
                PersonGrid.prototype.getService = function () { return MovieDB.PersonService.baseUrl; };
                PersonGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], PersonGrid);
                return PersonGrid;
            }(Serenity.EntityGrid));
            MovieDB.PersonGrid = PersonGrid;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var Gender;
            (function (Gender) {
                Gender[Gender["Male"] = 1] = "Male";
                Gender[Gender["Female"] = 2] = "Female";
            })(Gender = MovieDB.Gender || (MovieDB.Gender = {}));
            Serenity.Decorators.registerEnumType(Gender, 'MovieTutorial.Web.MovieDB.Gender', 'MovieDB.Gender');
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieCastColumns = /** @class */ (function () {
                function MovieCastColumns() {
                }
                MovieCastColumns.columnsKey = 'MovieDB.MovieCast';
                return MovieCastColumns;
            }());
            MovieDB.MovieCastColumns = MovieCastColumns;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieCastForm = /** @class */ (function (_super) {
                __extends(MovieCastForm, _super);
                function MovieCastForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!MovieCastForm.init) {
                        MovieCastForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.StringEditor;
                        Q.initFormType(MovieCastForm, [
                            'PersonId', w0,
                            'Character', w1
                        ]);
                    }
                    return _this;
                }
                MovieCastForm.formKey = 'MovieDB.MovieCast';
                return MovieCastForm;
            }(Serenity.PrefixedContext));
            MovieDB.MovieCastForm = MovieCastForm;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieCastRow;
            (function (MovieCastRow) {
                MovieCastRow.idProperty = 'MovieCastId';
                MovieCastRow.nameProperty = 'Character';
                MovieCastRow.localTextPrefix = 'MovieDB.MovieCast';
                MovieCastRow.deletePermission = 'Administration:General';
                MovieCastRow.insertPermission = 'Administration:General';
                MovieCastRow.readPermission = 'Administration:General';
                MovieCastRow.updatePermission = 'Administration:General';
            })(MovieCastRow = MovieDB.MovieCastRow || (MovieDB.MovieCastRow = {}));
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieCastService;
            (function (MovieCastService) {
                MovieCastService.baseUrl = 'MovieDB/MovieCast';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    MovieCastService[x] = function (r, s, o) {
                        return Q.serviceRequest(MovieCastService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(MovieCastService = MovieDB.MovieCastService || (MovieDB.MovieCastService = {}));
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieCastDialog = /** @class */ (function (_super) {
                __extends(MovieCastDialog, _super);
                function MovieCastDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new MovieDB.MovieCastForm(_this.idPrefix);
                    return _this;
                }
                MovieCastDialog.prototype.getFormKey = function () { return MovieDB.MovieCastForm.formKey; };
                MovieCastDialog.prototype.getIdProperty = function () { return MovieDB.MovieCastRow.idProperty; };
                MovieCastDialog.prototype.getLocalTextPrefix = function () { return MovieDB.MovieCastRow.localTextPrefix; };
                MovieCastDialog.prototype.getNameProperty = function () { return MovieDB.MovieCastRow.nameProperty; };
                MovieCastDialog.prototype.getService = function () { return MovieDB.MovieCastService.baseUrl; };
                MovieCastDialog.prototype.getDeletePermission = function () { return MovieDB.MovieCastRow.deletePermission; };
                MovieCastDialog.prototype.getInsertPermission = function () { return MovieDB.MovieCastRow.insertPermission; };
                MovieCastDialog.prototype.getUpdatePermission = function () { return MovieDB.MovieCastRow.updatePermission; };
                MovieCastDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], MovieCastDialog);
                return MovieCastDialog;
            }(Serenity.EntityDialog));
            MovieDB.MovieCastDialog = MovieCastDialog;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieCastGrid = /** @class */ (function (_super) {
                __extends(MovieCastGrid, _super);
                function MovieCastGrid(container) {
                    return _super.call(this, container) || this;
                }
                MovieCastGrid.prototype.getColumnsKey = function () { return MovieDB.MovieCastColumns.columnsKey; };
                MovieCastGrid.prototype.getDialogType = function () { return MovieDB.MovieCastDialog; };
                MovieCastGrid.prototype.getIdProperty = function () { return MovieDB.MovieCastRow.idProperty; };
                MovieCastGrid.prototype.getInsertPermission = function () { return MovieDB.MovieCastRow.insertPermission; };
                MovieCastGrid.prototype.getLocalTextPrefix = function () { return MovieDB.MovieCastRow.localTextPrefix; };
                MovieCastGrid.prototype.getService = function () { return MovieDB.MovieCastService.baseUrl; };
                MovieCastGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], MovieCastGrid);
                return MovieCastGrid;
            }(Serenity.EntityGrid));
            MovieDB.MovieCastGrid = MovieCastGrid;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieCastEditor = /** @class */ (function (_super) {
                __extends(MovieCastEditor, _super);
                function MovieCastEditor(container) {
                    return _super.call(this, container) || this;
                }
                MovieCastEditor.prototype.getColumnsKey = function () { return "MovieDB.MovieCast"; };
                MovieCastEditor.prototype.getDialogType = function () { return MovieDB.MovieCastEditDialog; };
                MovieCastEditor.prototype.getLocalTextPrefix = function () { return MovieDB.MovieCastRow.localTextPrefix; };
                MovieCastEditor.prototype.getAddButtonCaption = function () {
                    return "Add";
                };
                MovieCastEditor.prototype.validateEntity = function (row, id) {
                    if (!_super.prototype.validateEntity.call(this, row, id))
                        return false;
                    row.PersonFullname = MovieDB.PersonRow.getLookup()
                        .itemById[row.PersonId].Fullname;
                    return true;
                };
                MovieCastEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], MovieCastEditor);
                return MovieCastEditor;
            }(Serenity.Extensions.GridEditorBase));
            MovieDB.MovieCastEditor = MovieCastEditor;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var MovieCastEditDialog = /** @class */ (function (_super) {
                __extends(MovieCastEditDialog, _super);
                function MovieCastEditDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new MovieDB.MovieCastForm(_this.idPrefix);
                    return _this;
                }
                MovieCastEditDialog.prototype.getFormKey = function () { return MovieDB.MovieCastForm.formKey; };
                MovieCastEditDialog.prototype.getNameProperty = function () { return MovieDB.MovieCastRow.nameProperty; };
                MovieCastEditDialog.prototype.getLocalTextPrefix = function () { return MovieDB.MovieCastRow.localTextPrefix; };
                MovieCastEditDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], MovieCastEditDialog);
                return MovieCastEditDialog;
            }(Serenity.Extensions.GridEditorDialog));
            MovieDB.MovieCastEditDialog = MovieCastEditDialog;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var PersonMovieGrid = /** @class */ (function (_super) {
                __extends(PersonMovieGrid, _super);
                function PersonMovieGrid(container) {
                    return _super.call(this, container) || this;
                }
                PersonMovieGrid.prototype.getColumnsKey = function () { return "MovieDB.PersonMovie"; };
                PersonMovieGrid.prototype.getIdProperty = function () { return MovieDB.MovieCastRow.idProperty; };
                PersonMovieGrid.prototype.getLocalTextPrefix = function () { return MovieDB.MovieCastRow.localTextPrefix; };
                PersonMovieGrid.prototype.getService = function () { return MovieDB.MovieCastService.baseUrl; };
                PersonMovieGrid.prototype.getButtons = function () {
                    return null;
                };
                PersonMovieGrid.prototype.getInitialTitle = function () {
                    return null;
                };
                PersonMovieGrid.prototype.usePager = function () {
                    return false;
                };
                PersonMovieGrid.prototype.getGridCanLoad = function () {
                    return this.personID != null;
                };
                Object.defineProperty(PersonMovieGrid.prototype, "personID", {
                    get: function () {
                        return this._personID;
                    },
                    set: function (value) {
                        if (this._personID != value) {
                            this._personID = value;
                            this.setEquality("PersonId" /* MovieCastRow.Fields.PersonId */, value);
                            this.refresh();
                        }
                    },
                    enumerable: false,
                    configurable: true
                });
                PersonMovieGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], PersonMovieGrid);
                return PersonMovieGrid;
            }(Serenity.EntityGrid));
            MovieDB.PersonMovieGrid = PersonMovieGrid;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var Web;
    (function (Web) {
        var MovieDB;
        (function (MovieDB) {
            var PersonMovieColumns = /** @class */ (function () {
                function PersonMovieColumns() {
                }
                PersonMovieColumns.columnsKey = 'MovieDB.PersonMovie';
                return PersonMovieColumns;
            }());
            MovieDB.PersonMovieColumns = PersonMovieColumns;
        })(MovieDB = Web.MovieDB || (Web.MovieDB = {}));
    })(Web = MovieTutorial.Web || (MovieTutorial.Web = {}));
})(MovieTutorial || (MovieTutorial = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVUdXRvcmlhbC5XZWIuV2ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlBlcm1pc3Npb25LZXlzLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25Sb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uSXRlbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbkxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvblVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlckNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlckZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVMaXN0UmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuTG9naW5Gb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuTG9naW5SZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlNpZ25VcEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5TaWduVXBSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuR2VucmVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuR2VucmVGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuR2VucmVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5HZW5yZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5Nb3ZpZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5Nb3ZpZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5Nb3ZpZUdlbnJlc0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5Nb3ZpZUdlbnJlc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5Nb3ZpZUdlbnJlc1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllR2VucmVzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuTW92aWVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllVHV0b3JpYWwuTW92aWVLaW5kLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NjcmlwdFVzZXJEZWZpbml0aW9uLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1RleHRzLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9MYW5ndWFnZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGFuZ3VhZ2VHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlL1JvbGVEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1JvbGUvUm9sZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uL1JvbGVQZXJtaXNzaW9uRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9UcmFuc2xhdGlvbi9UcmFuc2xhdGlvbkdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvVXNlckRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlci9Vc2VyR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlci9BdXRoZW50aWNhdGlvbi9BdXRob3JpemF0aW9uLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9QZXJtaXNzaW9uQ2hlY2tFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL1VzZXJQZXJtaXNzaW9uRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9Sb2xlQ2hlY2tFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VzZXJSb2xlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9MYW5ndWFnZUxpc3QudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9TY3JpcHRJbml0aWFsaXphdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL05hdmlnYXRpb24vU2lkZWJhclNlYXJjaC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0xvZ2luUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9DaGFuZ2VQYXNzd29yZC9DaGFuZ2VQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvRm9yZ290UGFzc3dvcmQvRm9yZ290UGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L1Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvU2lnblVwL1NpZ25VcFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL0dlbnJlL0dlbnJlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL0dlbnJlL0dlbnJlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTW92aWVEQi9Nb3ZpZS9Nb3ZpZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTW92aWVEQi9Nb3ZpZS9Nb3ZpZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01vdmllREIvTW92aWVHZW5yZXMvTW92aWVHZW5yZXNEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01vdmllREIvTW92aWVHZW5yZXMvTW92aWVHZW5yZXNHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL01vdmllL0dlbnJlTGlzdEZvcm1hdHRlci50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5QZXJzb25Db2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuUGVyc29uRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLlBlcnNvblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLlBlcnNvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01vdmllREIvUGVyc29uL1BlcnNvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTW92aWVEQi9QZXJzb24vUGVyc29uR3JpZC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLkdlbmRlci50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllQ2FzdENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5Nb3ZpZUNhc3RGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuTW92aWVDYXN0Um93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuTW92aWVDYXN0U2VydmljZS50cyIsIi4uLy4uLy4uL01vZHVsZXMvTW92aWVEQi9Nb3ZpZUNhc3QvTW92aWVDYXN0RGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL01vdmllQ2FzdC9Nb3ZpZUNhc3RHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL01vdmllQ2FzdC9Nb3ZpZUNhc3RFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01vdmllREIvTW92aWVDYXN0L01vdmllQ2FzdEVkaXREaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01vdmllREIvUGVyc29uL1BlcnNvbk1vdmllR3JpZC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLlBlcnNvbk1vdmllQ29sdW1ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLGFBQWEsQ0FJdEI7QUFKRCxXQUFVLGFBQWE7SUFBQyxJQUFBLEdBQUcsQ0FJMUI7SUFKdUIsV0FBQSxHQUFHO1FBQUMsSUFBQSxjQUFjLENBSXpDO1FBSjJCLFdBQUEsY0FBYztZQUN0QztnQkFBQTtnQkFFQSxDQUFDO2dCQURVLDBCQUFVLEdBQUcseUJBQXlCLENBQUM7Z0JBQ2xELHNCQUFDO2FBQUEsQUFGRCxJQUVDO1lBRlksOEJBQWUsa0JBRTNCLENBQUE7UUFDTCxDQUFDLEVBSjJCLGNBQWMsR0FBZCxrQkFBYyxLQUFkLGtCQUFjLFFBSXpDO0lBQUQsQ0FBQyxFQUp1QixHQUFHLEdBQUgsaUJBQUcsS0FBSCxpQkFBRyxRQUkxQjtBQUFELENBQUMsRUFKUyxhQUFhLEtBQWIsYUFBYSxRQUl0QjtBQ0pELElBQVUsYUFBYSxDQTBCdEI7QUExQkQsV0FBVSxhQUFhO0lBQUMsSUFBQSxHQUFHLENBMEIxQjtJQTFCdUIsV0FBQSxHQUFHO1FBQUMsSUFBQSxjQUFjLENBMEJ6QztRQTFCMkIsV0FBQSxjQUFjO1lBTXRDO2dCQUFrQyxnQ0FBd0I7Z0JBSXRELHNCQUFZLE1BQWM7b0JBQTFCLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBYWhCO29CQVhHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFHO3dCQUNyQixZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzt3QkFFekIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO3dCQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO3dCQUV4QixDQUFDLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRTs0QkFDekIsWUFBWSxFQUFFLEVBQUU7NEJBQ2hCLGNBQWMsRUFBRSxFQUFFO3lCQUNyQixDQUFDLENBQUM7cUJBQ047O2dCQUNMLENBQUM7Z0JBakJNLG9CQUFPLEdBQUcseUJB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QyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE9BQU8sRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxTQUFTLEVBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxFQUFDLFdBQVcsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZ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O0FBSkQsV0FBVSxhQUFhO0lBQUMsSUFBQSxHQUFHLENBSTFCO0lBSnVCLFdBQUEsR0FBRztRQUFDLElBQUEsT0FBTyxDQUlsQztRQUoyQixXQUFBLE9BQU87WUFDL0I7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFEVSw2QkFBVSxHQUFHLHFCQUFxQixDQUFDO2dCQUM5Qyx5QkFBQzthQUFBLEFBRkQsSUFFQztZQUZZLDBCQUFrQixxQkFFOUIsQ0FBQTtRQUNMLENBQUMsRUFKMkIsT0FBTyxHQUFQLFdBQU8sS0FBUCxXQUFPLFFBSWxDO0lBQUQsQ0FBQyxFQUp1QixHQUFHLEdBQUgsaUJBQUcsS0FBSCxpQkFBRyxRQUkxQjtBQUFELENBQUMsRUFKUyxhQUFhLEtBQWIsYUFBYSxRQUl0QiIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VGb3JtIHtcclxuICAgICAgICBMYW5ndWFnZUlkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTGFuZ3VhZ2VOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUxhbmd1YWdlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTGFuZ3VhZ2VGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShMYW5ndWFnZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTGFuZ3VhZ2VJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZU5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VSb3cge1xyXG4gICAgICAgIElkPzogbnVtYmVyO1xyXG4gICAgICAgIExhbmd1YWdlSWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFuZ3VhZ2VOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTGFuZ3VhZ2VSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0xhbmd1YWdlTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdXZWIuQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPExhbmd1YWdlUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxMYW5ndWFnZVJvdz4oJ1dlYi5BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxyXG4gICAgICAgICAgICBMYW5ndWFnZUlkID0gXCJMYW5ndWFnZUlkXCIsXHJcbiAgICAgICAgICAgIExhbmd1YWdlTmFtZSA9IFwiTGFuZ3VhZ2VOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTGFuZ3VhZ2VTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxMYW5ndWFnZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PExhbmd1YWdlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pkxhbmd1YWdlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFBlcm1pc3Npb25LZXlzIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgU2VjdXJpdHkgPSBcIkFkbWluaXN0cmF0aW9uOlNlY3VyaXR5XCI7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFRyYW5zbGF0aW9uID0gXCJBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvblwiO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVGb3JtIHtcclxuICAgICAgICBSb2xlTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUm9sZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFJvbGVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSb2xlRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdSb2xlTmFtZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+IHtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIFJvbGVQZXJtaXNzaW9uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcm1pc3Npb25LZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgUm9sZVJvbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1JvbGVQZXJtaXNzaW9uSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUGVybWlzc2lvbktleSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBSb2xlUGVybWlzc2lvbklkID0gXCJSb2xlUGVybWlzc2lvbklkXCIsXHJcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFBlcm1pc3Npb25LZXkgPSBcIlBlcm1pc3Npb25LZXlcIixcclxuICAgICAgICAgICAgUm9sZVJvbGVOYW1lID0gXCJSb2xlUm9sZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgUm9sZUlEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiBzdHJpbmdbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVJvdyB7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnUm9sZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1JvbGVOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8Um9sZVJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8Um9sZVJvdz4oJ0FkbWluaXN0cmF0aW9uLlJvbGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBSb2xlTmFtZSA9IFwiUm9sZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vUm9sZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSb2xlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Um9sZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxSb2xlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFJvbGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlJvbGVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25JdGVtIHtcclxuICAgICAgICBLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgU291cmNlVGV4dD86IHN0cmluZztcclxuICAgICAgICBUYXJnZXRUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbVRleHQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVxdWVzdCB7XHJcbiAgICAgICAgU291cmNlTGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgICAgICBUYXJnZXRMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBUcmFuc2xhdGlvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBUcmFuc2xhdGlvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUcmFuc2xhdGlvbkl0ZW0+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vTGlzdFwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL1VwZGF0ZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5UcmFuc2xhdGlvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVGFyZ2V0TGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgICAgICBUcmFuc2xhdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyRm9ybSB7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEaXNwbGF5TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBVc2VySW1hZ2U6IFNlcmVuaXR5LkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZENvbmZpcm06IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIFNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghVXNlckZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFVzZXJGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShVc2VyRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VybmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVc2VySW1hZ2UnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmRDb25maXJtJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvdXJjZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgVXNlclBlcm1pc3Npb25JZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVybWlzc2lvbktleT86IHN0cmluZztcclxuICAgICAgICBHcmFudGVkPzogYm9vbGVhbjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBVc2VyPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJQZXJtaXNzaW9uSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUGVybWlzc2lvbktleSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvbklkID0gXCJVc2VyUGVybWlzc2lvbklkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFBlcm1pc3Npb25LZXkgPSBcIlBlcm1pc3Npb25LZXlcIixcclxuICAgICAgICAgICAgR3JhbnRlZCA9IFwiR3JhbnRlZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgVXNlciA9IFwiVXNlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclBlcm1pc3Npb25Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFJvbGVQZXJtaXNzaW9ucyhyZXF1ZXN0OiBVc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFBlcm1pc3Npb25LZXlzKHJlcXVlc3Q6IFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RcIixcclxuICAgICAgICAgICAgTGlzdFJvbGVQZXJtaXNzaW9ucyA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vTGlzdFJvbGVQZXJtaXNzaW9uc1wiLFxyXG4gICAgICAgICAgICBMaXN0UGVybWlzc2lvbktleXMgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RQZXJtaXNzaW9uS2V5c1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnLCBcclxuICAgICAgICAgICAgJ0xpc3RSb2xlUGVybWlzc2lvbnMnLCBcclxuICAgICAgICAgICAgJ0xpc3RQZXJtaXNzaW9uS2V5cydcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJQZXJtaXNzaW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBQZXJtaXNzaW9ucz86IFVzZXJQZXJtaXNzaW9uUm93W107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUxpc3RSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxudW1iZXI+IHtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVSb3cge1xyXG4gICAgICAgIFVzZXJSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBVc2VyPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclJvbGVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJSb2xlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlclJvbGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlclJvbGVJZCA9IFwiVXNlclJvbGVJZFwiLFxyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgVXNlciA9IFwiVXNlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb2xlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclJvbGVVcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclJvbGVMaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBVc2VyUm9sZUxpc3RSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJSb2xlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZXM/OiBudW1iZXJbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvdyB7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFNvdXJjZT86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZEhhc2g/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRTYWx0Pzogc3RyaW5nO1xyXG4gICAgICAgIERpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJJbWFnZT86IHN0cmluZztcclxuICAgICAgICBMYXN0RGlyZWN0b3J5VXBkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIElzQWN0aXZlPzogbnVtYmVyO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkQ29uZmlybT86IHN0cmluZztcclxuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlzQWN0aXZlUHJvcGVydHkgPSAnSXNBY3RpdmUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVXNlcm5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxVc2VyUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxVc2VyUm93PignQWRtaW5pc3RyYXRpb24uVXNlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVzZXJuYW1lID0gXCJVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBTb3VyY2UgPSBcIlNvdXJjZVwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZEhhc2ggPSBcIlBhc3N3b3JkSGFzaFwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZFNhbHQgPSBcIlBhc3N3b3JkU2FsdFwiLFxyXG4gICAgICAgICAgICBEaXNwbGF5TmFtZSA9IFwiRGlzcGxheU5hbWVcIixcclxuICAgICAgICAgICAgRW1haWwgPSBcIkVtYWlsXCIsXHJcbiAgICAgICAgICAgIFVzZXJJbWFnZSA9IFwiVXNlckltYWdlXCIsXHJcbiAgICAgICAgICAgIExhc3REaXJlY3RvcnlVcGRhdGUgPSBcIkxhc3REaXJlY3RvcnlVcGRhdGVcIixcclxuICAgICAgICAgICAgSXNBY3RpdmUgPSBcIklzQWN0aXZlXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkID0gXCJQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZENvbmZpcm0gPSBcIlBhc3N3b3JkQ29uZmlybVwiLFxyXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlcic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxVc2VyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VXNlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVbmRlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5VbmRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuVW5kZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFVzZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9EZWxldGVcIixcclxuICAgICAgICAgICAgVW5kZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVW5kZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1VuZGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIE9sZFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBOZXdQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFDaGFuZ2VQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIENoYW5nZVBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShDaGFuZ2VQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnT2xkUGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTmV3UGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIE9sZFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBGb3Jnb3RQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghRm9yZ290UGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBGb3Jnb3RQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEZvcmdvdFBhc3N3b3JkRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEZvcmdvdFBhc3N3b3JkUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dpbkZvcm0ge1xyXG4gICAgICAgIFVzZXJuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuTG9naW4nO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUxvZ2luRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTG9naW5Gb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTG9naW5Gb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJuYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTG9naW5SZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlc2V0UGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBOZXdQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUmVzZXRQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFJlc2V0UGFzc3dvcmRGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJlc2V0UGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ05ld1Bhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFRva2VuPzogc3RyaW5nO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTaWduVXBGb3JtIHtcclxuICAgICAgICBEaXNwbGF5TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybUVtYWlsOiBTZXJlbml0eS5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNpZ25VcEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuU2lnblVwJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFTaWduVXBGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBTaWduVXBGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShTaWduVXBGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc3BsYXlOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1FbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtUGFzc3dvcmQnLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTaWduVXBSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIERpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGNsYXNzIEdlbnJlQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnTW92aWVEQi5HZW5yZSc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdlbnJlRm9ybSB7XHJcbiAgICAgICAgTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBHZW5yZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01vdmllREIuR2VucmUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUdlbnJlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgR2VucmVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShHZW5yZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTmFtZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdlbnJlUm93IHtcclxuICAgICAgICBHZW5yZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBHZW5yZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnR2VucmVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ01vdmllREIuR2VucmUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnTW92aWVEQi5HZW5yZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8R2VucmVSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPEdlbnJlUm93PignTW92aWVEQi5HZW5yZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgR2VucmVJZCA9IFwiR2VucmVJZFwiLFxyXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBHZW5yZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ01vdmllREIvR2VucmUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8R2VucmVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxHZW5yZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxHZW5yZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxHZW5yZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJNb3ZpZURCL0dlbnJlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIk1vdmllREIvR2VucmUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTW92aWVEQi9HZW5yZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk1vdmllREIvR2VucmUvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiTW92aWVEQi9HZW5yZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+R2VucmVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ01vdmllREIuTW92aWUnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNb3ZpZUZvcm0ge1xyXG4gICAgICAgIFRpdGxlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGVzY3JpcHRpb246IFNlcmVuaXR5LlRleHRBcmVhRWRpdG9yO1xyXG4gICAgICAgIENhc3RMaXN0OiBNb3ZpZUNhc3RFZGl0b3I7XHJcbiAgICAgICAgU3RvcnlsaW5lOiBTZXJlbml0eS5UZXh0QXJlYUVkaXRvcjtcclxuICAgICAgICBZZWFyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFJlbGVhc2VEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIEdlbnJlTGlzdDogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIEtpbmQ6IFNlcmVuaXR5LkVudW1FZGl0b3I7XHJcbiAgICAgICAgUnVudGltZTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTW92aWVGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNb3ZpZURCLk1vdmllJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFNb3ZpZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIE1vdmllRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLlRleHRBcmVhRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gTW92aWVDYXN0RWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc0ID0gcy5EYXRlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc1ID0gcy5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzYgPSBzLkVudW1FZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTW92aWVGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpdGxlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Nhc3RMaXN0JywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0b3J5bGluZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdZZWFyJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlbGVhc2VEYXRlJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dlbnJlTGlzdCcsIHc1LFxyXG4gICAgICAgICAgICAgICAgICAgICdLaW5kJywgdzYsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1J1bnRpbWUnLCB3M1xyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZUdlbnJlc0NvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ01vdmllREIuTW92aWVHZW5yZXMnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNb3ZpZUdlbnJlc0Zvcm0ge1xyXG4gICAgICAgIE1vdmllSWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgR2VucmVJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTW92aWVHZW5yZXNGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNb3ZpZURCLk1vdmllR2VucmVzJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFNb3ZpZUdlbnJlc0Zvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIE1vdmllR2VucmVzRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKE1vdmllR2VucmVzRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdNb3ZpZUlkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dlbnJlSWQnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNb3ZpZUdlbnJlc1JvdyB7XHJcbiAgICAgICAgTW92aWVHZW5yZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIE1vdmllSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgR2VucmVJZD86IG51bWJlcjtcclxuICAgICAgICBNb3ZpZVRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIE1vdmllRGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVTdG9yeWxpbmU/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVZZWFyPzogbnVtYmVyO1xyXG4gICAgICAgIE1vdmllUmVsZWFzZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVSdW50aW1lPzogbnVtYmVyO1xyXG4gICAgICAgIE1vdmllS2luZD86IG51bWJlcjtcclxuICAgICAgICBHZW5yZU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBNb3ZpZUdlbnJlc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnTW92aWVHZW5yZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ01vdmllREIuTW92aWVHZW5yZXMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBNb3ZpZUdlbnJlSWQgPSBcIk1vdmllR2VucmVJZFwiLFxyXG4gICAgICAgICAgICBNb3ZpZUlkID0gXCJNb3ZpZUlkXCIsXHJcbiAgICAgICAgICAgIEdlbnJlSWQgPSBcIkdlbnJlSWRcIixcclxuICAgICAgICAgICAgTW92aWVUaXRsZSA9IFwiTW92aWVUaXRsZVwiLFxyXG4gICAgICAgICAgICBNb3ZpZURlc2NyaXB0aW9uID0gXCJNb3ZpZURlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIE1vdmllU3RvcnlsaW5lID0gXCJNb3ZpZVN0b3J5bGluZVwiLFxyXG4gICAgICAgICAgICBNb3ZpZVllYXIgPSBcIk1vdmllWWVhclwiLFxyXG4gICAgICAgICAgICBNb3ZpZVJlbGVhc2VEYXRlID0gXCJNb3ZpZVJlbGVhc2VEYXRlXCIsXHJcbiAgICAgICAgICAgIE1vdmllUnVudGltZSA9IFwiTW92aWVSdW50aW1lXCIsXHJcbiAgICAgICAgICAgIE1vdmllS2luZCA9IFwiTW92aWVLaW5kXCIsXHJcbiAgICAgICAgICAgIEdlbnJlTmFtZSA9IFwiR2VucmVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBNb3ZpZUdlbnJlc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ01vdmllREIvTW92aWVHZW5yZXMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TW92aWVHZW5yZXNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxNb3ZpZUdlbnJlc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxNb3ZpZUdlbnJlc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxNb3ZpZUdlbnJlc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJNb3ZpZURCL01vdmllR2VucmVzL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIk1vdmllREIvTW92aWVHZW5yZXMvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTW92aWVEQi9Nb3ZpZUdlbnJlcy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk1vdmllREIvTW92aWVHZW5yZXMvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiTW92aWVEQi9Nb3ZpZUdlbnJlcy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+TW92aWVHZW5yZXNTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNb3ZpZVJvdyB7XHJcbiAgICAgICAgTW92aWVJZD86IG51bWJlcjtcclxuICAgICAgICBUaXRsZT86IHN0cmluZztcclxuICAgICAgICBEZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgICAgICBTdG9yeWxpbmU/OiBzdHJpbmc7XHJcbiAgICAgICAgWWVhcj86IG51bWJlcjtcclxuICAgICAgICBSZWxlYXNlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBSdW50aW1lPzogbnVtYmVyO1xyXG4gICAgICAgIEtpbmQ/OiBNb3ZpZUtpbmQ7XHJcbiAgICAgICAgR2VucmVMaXN0PzogbnVtYmVyW107XHJcbiAgICAgICAgQ2FzdExpc3Q/OiBNb3ZpZUNhc3RSb3dbXTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE1vdmllUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdNb3ZpZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1RpdGxlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ01vdmllREIuTW92aWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBNb3ZpZUlkID0gXCJNb3ZpZUlkXCIsXHJcbiAgICAgICAgICAgIFRpdGxlID0gXCJUaXRsZVwiLFxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgU3RvcnlsaW5lID0gXCJTdG9yeWxpbmVcIixcclxuICAgICAgICAgICAgWWVhciA9IFwiWWVhclwiLFxyXG4gICAgICAgICAgICBSZWxlYXNlRGF0ZSA9IFwiUmVsZWFzZURhdGVcIixcclxuICAgICAgICAgICAgUnVudGltZSA9IFwiUnVudGltZVwiLFxyXG4gICAgICAgICAgICBLaW5kID0gXCJLaW5kXCIsXHJcbiAgICAgICAgICAgIEdlbnJlTGlzdCA9IFwiR2VucmVMaXN0XCIsXHJcbiAgICAgICAgICAgIENhc3RMaXN0ID0gXCJDYXN0TGlzdFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTW92aWVTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdNb3ZpZURCL01vdmllJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PE1vdmllUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TW92aWVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8TW92aWVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBNb3ZpZUxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxNb3ZpZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJNb3ZpZURCL01vdmllL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIk1vdmllREIvTW92aWUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTW92aWVEQi9Nb3ZpZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk1vdmllREIvTW92aWUvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiTW92aWVEQi9Nb3ZpZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+TW92aWVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwge1xyXG4gICAgZXhwb3J0IGVudW0gTW92aWVLaW5kIHtcclxuICAgICAgICBGaWxtID0gMSxcclxuICAgICAgICBUdlNlcmllcyA9IDIsXHJcbiAgICAgICAgTWluaVNlcmllcyA9IDNcclxuICAgIH1cclxuICAgIFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFbnVtVHlwZShNb3ZpZUtpbmQsICdNb3ZpZVR1dG9yaWFsLk1vdmllS2luZCcsICdNb3ZpZURCLk1vdmllS2luZCcpO1xyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNjcmlwdFVzZXJEZWZpbml0aW9uIHtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBJc0FkbWluPzogYm9vbGVhbjtcclxuICAgICAgICBQZXJtaXNzaW9ucz86IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuVGV4dHMge1xyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIERiIHtcclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBMYW5ndWFnZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSb2xlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb25LZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlUGVybWlzc2lvbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZVJvbGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBUcmFuc2xhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tVGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVudGl0eVBsdXJhbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEtleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE92ZXJyaWRlQ29uZmlybWF0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZUNoYW5nZXNCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2VMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZVRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXJnZXRMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldFRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXIge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXNBY3RpdmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0RGlyZWN0b3J5VXBkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZENvbmZpcm06IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZEhhc2g6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZFNhbHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlckltYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHcmFudGVkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbktleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyUGVybWlzc2lvbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXJSb2xlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBNb3ZpZURCIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBHZW5yZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR2VucmVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIE1vdmllIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXN0TGlzdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR2VucmVMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgS2luZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZWxlYXNlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJ1bnRpbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdG9yeWxpbmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFllYXI6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIE1vdmllQ2FzdCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2hhcmFjdGVyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVDYXN0SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZURlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllS2luZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllUmVsZWFzZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZVJ1bnRpbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZVN0b3J5bGluZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZVllYXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25CaXJ0aFBsYWNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVyc29uQmlydGhkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVyc29uRmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVyc29uRnVsbG5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25HZW5kZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25IZWlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcnNvbkxhc3RuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBNb3ZpZUdlbnJlcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR2VucmVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdlbnJlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZUdlbnJlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVLaW5kOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVSZWxlYXNlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllUnVudGltZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllU3RvcnlsaW5lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllWWVhcjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUGVyc29uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCaXJ0aFBsYWNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmlydGhkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRnVsbG5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHZW5kZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBIZWlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0bmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcnNvbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgRm9ybXMge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQ2hhbmdlUGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEZvcmdvdFBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1JbmZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgTG9naW4ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZhY2Vib29rQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9yZ290UGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHb29nbGVCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMb2dpblRvWW91ckFjY291bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPUjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlbWVtYmVyTWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaWduSW5CdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaWduVXBCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJlc2V0UGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWxTdWJqZWN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgU2lnblVwIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY2NlcHRUZXJtczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjdGl2YXRlRW1haWxTdWJqZWN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWN0aXZhdGlvbkNvbXBsZXRlTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybUVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1JbmZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgTmF2aWdhdGlvbiB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IExvZ291dExpbms6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgU2l0ZVRpdGxlOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgU2l0ZSB7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBBY2Nlc3NEZW5pZWQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2xpY2tUb0NoYW5nZVVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTGFja1Blcm1pc3Npb25zOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOb3RMb2dnZWRJbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGFnZVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQmFzaWNQcm9ncmVzc0RpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYW5jZWxUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGxlYXNlV2FpdDogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEJ1bGtTZXJ2aWNlQWN0aW9uIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFsbEhhZEVycm9yc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQWxsU3VjY2Vzc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybWF0aW9uRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFcnJvckNvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOb3RoaW5nVG9Qcm9jZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb21lSGFkRXJyb3JzRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzQ291bnQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBEYXNoYm9hcmQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ29udGVudERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgTGF5b3V0IHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlckNvcHlyaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVySW5mbzogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVyUmlnaHRzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHZW5lcmFsU2V0dGluZ3M6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFjazogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFja0xpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsdWU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmx1ZUxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUdyZWVuOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUdyZWVuTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUHVycGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVB1cnBsZUxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVJlZDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVSZWRMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVZZWxsb3c6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lWWVsbG93TGlnaHQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvbkRpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBVc2VyRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRQZXJtaXNzaW9uc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdFJvbGVzQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25EaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdyYW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXZva2U6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlclJvbGVEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVmFsaWRhdGlvbkVycm9yIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFZhbGlkYXRpb24ge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBBdXRoZW50aWNhdGlvbkVycm9yOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IENhbnRGaW5kVXNlcldpdGhFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBDdXJyZW50UGFzc3dvcmRNaXNtYXRjaDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGVGb3JlaWduS2V5RXJyb3I6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgRW1haWxDb25maXJtOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsSW5Vc2U6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgSW52YWxpZEFjdGl2YXRlVG9rZW46IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgSW52YWxpZFJlc2V0VG9rZW46IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTYXZlUHJpbWFyeUtleUVycm9yOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgTW92aWVUdXRvcmlhbC5XZWJbJ1RleHRzJ10gPSBRLnByb3h5VGV4dHMoVGV4dHMsICcnLCB7RGI6e0FkbWluaXN0cmF0aW9uOntMYW5ndWFnZTp7SWQ6MSxMYW5ndWFnZUlkOjEsTGFuZ3VhZ2VOYW1lOjF9LFJvbGU6e1JvbGVJZDoxLFJvbGVOYW1lOjF9LFJvbGVQZXJtaXNzaW9uOntQZXJtaXNzaW9uS2V5OjEsUm9sZUlkOjEsUm9sZVBlcm1pc3Npb25JZDoxLFJvbGVSb2xlTmFtZToxfSxUcmFuc2xhdGlvbjp7Q3VzdG9tVGV4dDoxLEVudGl0eVBsdXJhbDoxLEtleToxLE92ZXJyaWRlQ29uZmlybWF0aW9uOjEsU2F2ZUNoYW5nZXNCdXR0b246MSxTb3VyY2VMYW5ndWFnZToxLFNvdXJjZVRleHQ6MSxUYXJnZXRMYW5ndWFnZToxLFRhcmdldFRleHQ6MX0sVXNlcjp7RGlzcGxheU5hbWU6MSxFbWFpbDoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxJc0FjdGl2ZToxLExhc3REaXJlY3RvcnlVcGRhdGU6MSxQYXNzd29yZDoxLFBhc3N3b3JkQ29uZmlybToxLFBhc3N3b3JkSGFzaDoxLFBhc3N3b3JkU2FsdDoxLFNvdXJjZToxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MSxVc2VySWQ6MSxVc2VySW1hZ2U6MSxVc2VybmFtZToxfSxVc2VyUGVybWlzc2lvbjp7R3JhbnRlZDoxLFBlcm1pc3Npb25LZXk6MSxVc2VyOjEsVXNlcklkOjEsVXNlclBlcm1pc3Npb25JZDoxLFVzZXJuYW1lOjF9LFVzZXJSb2xlOntSb2xlSWQ6MSxVc2VyOjEsVXNlcklkOjEsVXNlclJvbGVJZDoxLFVzZXJuYW1lOjF9fSxNb3ZpZURCOntHZW5yZTp7R2VucmVJZDoxLE5hbWU6MX0sTW92aWU6e0Nhc3RMaXN0OjEsRGVzY3JpcHRpb246MSxHZW5yZUxpc3Q6MSxLaW5kOjEsTW92aWVJZDoxLFJlbGVhc2VEYXRlOjEsUnVudGltZToxLFN0b3J5bGluZToxLFRpdGxlOjEsWWVhcjoxfSxNb3ZpZUNhc3Q6e0NoYXJhY3RlcjoxLE1vdmllQ2FzdElkOjEsTW92aWVEZXNjcmlwdGlvbjoxLE1vdmllSWQ6MSxNb3ZpZUtpbmQ6MSxNb3ZpZVJlbGVhc2VEYXRlOjEsTW92aWVSdW50aW1lOjEsTW92aWVTdG9yeWxpbmU6MSxNb3ZpZVRpdGxlOjEsTW92aWVZZWFyOjEsUGVyc29uQmlydGhQbGFjZToxLFBlcnNvbkJpcnRoZGF0ZToxLFBlcnNvbkZpcnN0TmFtZToxLFBlcnNvbkZ1bGxuYW1lOjEsUGVyc29uR2VuZGVyOjEsUGVyc29uSGVpZ2h0OjEsUGVyc29uSWQ6MSxQZXJzb25MYXN0bmFtZToxfSxNb3ZpZUdlbnJlczp7R2VucmVJZDoxLEdlbnJlTmFtZToxLE1vdmllRGVzY3JpcHRpb246MSxNb3ZpZUdlbnJlSWQ6MSxNb3ZpZUlkOjEsTW92aWVLaW5kOjEsTW92aWVSZWxlYXNlRGF0ZToxLE1vdmllUnVudGltZToxLE1vdmllU3RvcnlsaW5lOjEsTW92aWVUaXRsZToxLE1vdmllWWVhcjoxfSxQZXJzb246e0JpcnRoUGxhY2U6MSxCaXJ0aGRhdGU6MSxGaXJzdE5hbWU6MSxGdWxsbmFtZToxLEdlbmRlcjoxLEhlaWdodDoxLExhc3RuYW1lOjEsUGVyc29uSWQ6MX19fSxGb3Jtczp7TWVtYmVyc2hpcDp7Q2hhbmdlUGFzc3dvcmQ6e0Zvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sRm9yZ290UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LExvZ2luOntGYWNlYm9va0J1dHRvbjoxLEZvcmdvdFBhc3N3b3JkOjEsR29vZ2xlQnV0dG9uOjEsTG9naW5Ub1lvdXJBY2NvdW50OjEsT1I6MSxSZW1lbWJlck1lOjEsU2lnbkluQnV0dG9uOjEsU2lnblVwQnV0dG9uOjF9LFJlc2V0UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRW1haWxTdWJqZWN0OjEsRm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxTaWduVXA6e0FjY2VwdFRlcm1zOjEsQWN0aXZhdGVFbWFpbFN1YmplY3Q6MSxBY3RpdmF0aW9uQ29tcGxldGVNZXNzYWdlOjEsQmFja1RvTG9naW46MSxDb25maXJtRW1haWw6MSxDb25maXJtUGFzc3dvcmQ6MSxEaXNwbGF5TmFtZToxLEVtYWlsOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxQYXNzd29yZDoxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX19fSxOYXZpZ2F0aW9uOntMb2dvdXRMaW5rOjEsU2l0ZVRpdGxlOjF9LFNpdGU6e0FjY2Vzc0RlbmllZDp7Q2xpY2tUb0NoYW5nZVVzZXI6MSxDbGlja1RvTG9naW46MSxMYWNrUGVybWlzc2lvbnM6MSxOb3RMb2dnZWRJbjoxLFBhZ2VUaXRsZToxfSxCYXNpY1Byb2dyZXNzRGlhbG9nOntDYW5jZWxUaXRsZToxLFBsZWFzZVdhaXQ6MX0sQnVsa1NlcnZpY2VBY3Rpb246e0FsbEhhZEVycm9yc0Zvcm1hdDoxLEFsbFN1Y2Nlc3NGb3JtYXQ6MSxDb25maXJtYXRpb25Gb3JtYXQ6MSxFcnJvckNvdW50OjEsTm90aGluZ1RvUHJvY2VzczoxLFNvbWVIYWRFcnJvcnNGb3JtYXQ6MSxTdWNjZXNzQ291bnQ6MX0sRGFzaGJvYXJkOntDb250ZW50RGVzY3JpcHRpb246MX0sTGF5b3V0OntGb290ZXJDb3B5cmlnaHQ6MSxGb290ZXJJbmZvOjEsRm9vdGVyUmlnaHRzOjEsR2VuZXJhbFNldHRpbmdzOjEsTGFuZ3VhZ2U6MSxUaGVtZToxLFRoZW1lQmxhY2s6MSxUaGVtZUJsYWNrTGlnaHQ6MSxUaGVtZUJsdWU6MSxUaGVtZUJsdWVMaWdodDoxLFRoZW1lR3JlZW46MSxUaGVtZUdyZWVuTGlnaHQ6MSxUaGVtZVB1cnBsZToxLFRoZW1lUHVycGxlTGlnaHQ6MSxUaGVtZVJlZDoxLFRoZW1lUmVkTGlnaHQ6MSxUaGVtZVllbGxvdzoxLFRoZW1lWWVsbG93TGlnaHQ6MX0sUm9sZVBlcm1pc3Npb25EaWFsb2c6e0RpYWxvZ1RpdGxlOjEsRWRpdEJ1dHRvbjoxLFNhdmVTdWNjZXNzOjF9LFVzZXJEaWFsb2c6e0VkaXRQZXJtaXNzaW9uc0J1dHRvbjoxLEVkaXRSb2xlc0J1dHRvbjoxfSxVc2VyUGVybWlzc2lvbkRpYWxvZzp7RGlhbG9nVGl0bGU6MSxHcmFudDoxLFBlcm1pc3Npb246MSxSZXZva2U6MSxTYXZlU3VjY2VzczoxfSxVc2VyUm9sZURpYWxvZzp7RGlhbG9nVGl0bGU6MSxTYXZlU3VjY2VzczoxfSxWYWxpZGF0aW9uRXJyb3I6e1RpdGxlOjF9fSxWYWxpZGF0aW9uOntBdXRoZW50aWNhdGlvbkVycm9yOjEsQ2FudEZpbmRVc2VyV2l0aEVtYWlsOjEsQ3VycmVudFBhc3N3b3JkTWlzbWF0Y2g6MSxEZWxldGVGb3JlaWduS2V5RXJyb3I6MSxFbWFpbENvbmZpcm06MSxFbWFpbEluVXNlOjEsSW52YWxpZEFjdGl2YXRlVG9rZW46MSxJbnZhbGlkUmVzZXRUb2tlbjoxLE1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGg6MSxTYXZlUHJpbWFyeUtleUVycm9yOjF9fSk7XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxMYW5ndWFnZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBMYW5ndWFnZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBMYW5ndWFnZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBMYW5ndWFnZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8TGFuZ3VhZ2VSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBMYW5ndWFnZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIExhbmd1YWdlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtMYW5ndWFnZVJvdy5GaWVsZHMuTGFuZ3VhZ2VOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Um9sZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSb2xlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUm9sZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJvbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUm9sZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUb29sYmFyQnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IHN1cGVyLmdldFRvb2xiYXJCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5FZGl0QnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcGVybWlzc2lvbnMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS1sb2NrIHRleHQtZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUm9sZVBlcm1pc3Npb25EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlSUQ6IHRoaXMuZW50aXR5LlJvbGVJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZW50aXR5LlJvbGVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbihcImVkaXQtcGVybWlzc2lvbnMtYnV0dG9uXCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxSb2xlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uUm9sZVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBSb2xlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUm9sZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJvbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1JvbGVSb3cuRmllbGRzLlJvbGVOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVQZXJtaXNzaW9uRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogUm9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFBlcm1pc3Npb25DaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1Blcm1pc3Npb25zJyksIHtcclxuICAgICAgICAgICAgICAgIHNob3dSZXZva2U6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25TZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgUm9sZUlEOiB0aGlzLm9wdGlvbnMucm9sZUlELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcy5tYXAoeCA9PiAoPFVzZXJQZXJtaXNzaW9uUm93PnsgUGVybWlzc2lvbktleTogeCB9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5pbXBsaWNpdFBlcm1pc3Npb25zID0gUS5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5JbXBsaWNpdFBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpOiBKUXVlcnlVSS5EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlSUQ6IHRoaXMub3B0aW9ucy5yb2xlSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9uczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZS5tYXAoeCA9PiB4LlBlcm1pc3Npb25LZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuU2F2ZVN1Y2Nlc3MnKSksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlJvbGVQZXJtaXNzaW9uRGlhbG9nLkRpYWxvZ1RpdGxlJyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxkaXYgaWQ9XCJ+X1Blcm1pc3Npb25zXCI+PC9kaXY+JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICB0aXRsZT86IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVHJhbnNsYXRpb25HcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxUcmFuc2xhdGlvbkl0ZW0sIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJLZXlcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFRyYW5zbGF0aW9uU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFzQ2hhbmdlczogYm9vbGVhbjtcclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIHNvdXJjZUxhbmd1YWdlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7IFxyXG4gICAgICAgIHByaXZhdGUgdGFyZ2V0TGFuZ3VhZ2U6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBwcml2YXRlIHRhcmdldExhbmd1YWdlS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oJ2tleXVwLicgKyB0aGlzLnVuaXF1ZU5hbWUgKyAnIGNoYW5nZS4nICsgdGhpcy51bmlxdWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgJ2lucHV0LmN1c3RvbS10ZXh0JywgZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBRLnRyaW1Ub051bGwoJChlLnRhcmdldCkudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5nZXRJdGVtQnlJZCgkKGUudGFyZ2V0KS5kYXRhKCdrZXknKSkuQ3VzdG9tVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgbGV0IGRvbmU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3NvdXJjZS10ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlNvdXJjZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uU291cmNlVGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCd0YXJnZXQtdGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlRhcmdldFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uVGFyZ2V0VGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW107XHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7IGZpZWxkOiAnS2V5Jywgd2lkdGg6IDMwMCwgc29ydGFibGU6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnU291cmNlVGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzb3VyY2UtdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGN0eC52YWx1ZSB8fCAnJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ0N1c3RvbVRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IFEub3V0ZXJIdG1sKCQoJzxpbnB1dC8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2N1c3RvbS10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBjdHgudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAndGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEta2V5JywgY3R4Lml0ZW0uS2V5KSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdUYXJnZXRUZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3RhcmdldC10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChjdHgudmFsdWUgfHwgJycpKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG9wdDogU2VyZW5pdHkuTG9va3VwRWRpdG9yT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGxvb2t1cEtleTogJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZSA9IFNlcmVuaXR5LldpZGdldC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWwgPT4gZWwuYXBwZW5kVG8odGhpcy50b29sYmFyLmVsZW1lbnQpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJy0tLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlNvdXJjZUxhbmd1YWdlJykgKyAnIC0tLScpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlID0gU2VyZW5pdHkuV2lkZ2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3IsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbCA9PiBlbC5hcHBlbmRUbyh0aGlzLnRvb2xiYXIuZWxlbWVudCkuYXR0cigncGxhY2Vob2xkZXInLCAnLS0tICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uVGFyZ2V0TGFuZ3VhZ2UnKSArICcgLS0tJyksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlQ2hhbmdlcyhsYW5ndWFnZTogc3RyaW5nKTogUHJvbWlzZUxpa2U8YW55PiB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uc1tpdGVtLktleV0gPSBpdGVtLkN1c3RvbVRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoVHJhbnNsYXRpb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBUYXJnZXRMYW5ndWFnZUlEOiBsYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIFRyYW5zbGF0aW9uczogdHJhbnNsYXRpb25zXHJcbiAgICAgICAgICAgIH0pKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSBRLnRyaW1Ub051bGwobGFuZ3VhZ2UpIHx8ICdpbnZhcmlhbnQnO1xyXG4gICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKCdVc2VyIHRyYW5zbGF0aW9ucyBpbiBcIicgKyBsYW5ndWFnZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJ1wiIGxhbmd1YWdlIGFyZSBzYXZlZCB0byBcInVzZXIudGV4dHMuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgKyAnLmpzb25cIiAnICsgJ2ZpbGUgdW5kZXIgXCJ+L0FwcF9EYXRhL3RleHRzL1wiJywgJycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy52aWV3LnBhcmFtcztcclxuICAgICAgICAgICAgcmVxdWVzdC5Tb3VyY2VMYW5ndWFnZUlEID0gdGhpcy5zb3VyY2VMYW5ndWFnZS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZUtleSA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2UudmFsdWUgfHwgJyc7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuVGFyZ2V0TGFuZ3VhZ2VJRCA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIub25WaWV3U3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKTogU2VyZW5pdHkuVG9vbEJ1dHRvbltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5TYXZlQ2hhbmdlc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogZSA9PiB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhcHBseS1jaGFuZ2VzLWJ1dHRvbidcclxuICAgICAgICAgICAgfV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlUXVpY2tTZWFyY2hJbnB1dCgpIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAoZmllbGQsIHNlYXJjaFRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogVHJhbnNsYXRpb25JdGVtKSB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNkID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcztcclxuICAgICAgICAgICAgdmFyIHNlYXJjaGluZyA9IHNkKHRoaXMuc2VhcmNoVGV4dCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1hdGNoKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0cilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoaW5nKSA+PSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUS5pc0VtcHR5T3JOdWxsKHNlYXJjaGluZykgfHwgbWF0Y2goaXRlbS5LZXkpIHx8IG1hdGNoKGl0ZW0uU291cmNlVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoKGl0ZW0uVGFyZ2V0VGV4dCkgfHwgbWF0Y2goaXRlbS5DdXN0b21UZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1c2VQYWdlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxVc2VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFVzZXJGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJc0FjdGl2ZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pc0FjdGl2ZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVzZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBVc2VyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFVzZXJGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZS5sZW5ndGggPCA3KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNyBjaGFyYWN0ZXJzIVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0uYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUgIT0gdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJUaGUgcGFzc3dvcmRzIGVudGVyZWQgZG9lc24ndCBtYXRjaCFcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5nZXRUb29sYmFyQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0Um9sZXNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1yb2xlcy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLXVzZXJzIHRleHQtYmx1ZScsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUm9sZURpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJRDogdGhpcy5lbnRpdHkuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5lbnRpdHkuVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0UGVybWlzc2lvbnNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1wZXJtaXNzaW9ucy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLWxvY2sgdGV4dC1ncmVlbicsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUGVybWlzc2lvbkRpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJRDogdGhpcy5lbnRpdHkuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5lbnRpdHkuVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlSW50ZXJmYWNlKCkge1xyXG4gICAgICAgICAgICBzdXBlci51cGRhdGVJbnRlcmZhY2UoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKCdlZGl0LXJvbGVzLWJ1dHRvbicpLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKFwiZWRpdC1wZXJtaXNzaW9ucy1idXR0b25cIikudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLCB0aGlzLmlzTmV3T3JEZWxldGVkKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGFmdGVyTG9hZEVudGl0eSgpIHtcclxuICAgICAgICAgICAgc3VwZXIuYWZ0ZXJMb2FkRW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGVzZSBmaWVsZHMgYXJlIG9ubHkgcmVxdWlyZWQgaW4gbmV3IHJlY29yZCBtb2RlXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZC5lbGVtZW50LnRvZ2dsZUNsYXNzKCdyZXF1aXJlZCcsIHRoaXMuaXNOZXcoKSlcclxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCdzdXAnKS50b2dnbGUodGhpcy5pc05ldygpKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS5lbGVtZW50LnRvZ2dsZUNsYXNzKCdyZXF1aXJlZCcsIHRoaXMuaXNOZXcoKSlcclxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCdzdXAnKS50b2dnbGUodGhpcy5pc05ldygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxVc2VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uVXNlclwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBVc2VyRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SXNBY3RpdmVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaXNBY3RpdmVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBVc2VyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVXNlclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbVXNlclJvdy5GaWVsZHMuVXNlcm5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BdXRob3JpemF0aW9uIHtcclxuICAgIGV4cG9ydCBkZWNsYXJlIGxldCB1c2VyRGVmaW5pdGlvbjogU2NyaXB0VXNlckRlZmluaXRpb247XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1dGhvcml6YXRpb24sICd1c2VyRGVmaW5pdGlvbicsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0UmVtb3RlRGF0YSgnVXNlckRhdGEnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbktleSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcihbU2VyZW5pdHkuSUdldEVkaXRWYWx1ZSwgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZV0pXHJcbiAgICBleHBvcnQgY2xhc3MgUGVybWlzc2lvbkNoZWNrRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuRGF0YUdyaWQ8UGVybWlzc2lvbkNoZWNrSXRlbSwgUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFwiS2V5XCI7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgcHJpdmF0ZSBieVBhcmVudEtleTogUS5Hcm91cGluZzxQZXJtaXNzaW9uQ2hlY2tJdGVtPjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdDogUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGl0bGVCeUtleTogUS5EaWN0aW9uYXJ5PHN0cmluZz4gPSB7fTtcclxuICAgICAgICAgICAgbGV0IHBlcm1pc3Npb25LZXlzID0gdGhpcy5nZXRTb3J0ZWRHcm91cEFuZFBlcm1pc3Npb25LZXlzKHRpdGxlQnlLZXkpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBwZXJtaXNzaW9uS2V5cy5tYXAoa2V5ID0+IDxQZXJtaXNzaW9uQ2hlY2tJdGVtPntcclxuICAgICAgICAgICAgICAgIEtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgUGFyZW50S2V5OiB0aGlzLmdldFBhcmVudEtleShrZXkpLFxyXG4gICAgICAgICAgICAgICAgVGl0bGU6IHRpdGxlQnlLZXlba2V5XSxcclxuICAgICAgICAgICAgICAgIEdyYW50UmV2b2tlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgSXNHcm91cDoga2V5LmNoYXJBdChrZXkubGVuZ3RoIC0gMSkgPT09ICc6J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlQYXJlbnRLZXkgPSBRLnRvR3JvdXBpbmcoaXRlbXMsIHggPT4geC5QYXJlbnRLZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSwgZ3JhbnQ6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoaXRlbS5HcmFudFJldm9rZSA9PT0gZ3JhbnQpID8gJyBjaGVja2VkJyA6ICcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGRlc2MgPSB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgICAgICBsZXQgZ3JhbnRlZCA9IGRlc2MuZmlsdGVyKHggPT4geC5HcmFudFJldm9rZSA9PT0gZ3JhbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFncmFudGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGVzYy5sZW5ndGggPT09IGdyYW50ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2NoZWNrZWQnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJ2NoZWNrZWQgcGFydGlhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHJvbGVPckltcGxpY2l0KGtleSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcm9sZVBlcm1pc3Npb25zW2tleV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2YgT2JqZWN0LmtleXModGhpcy5fcm9sZVBlcm1pc3Npb25zKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQgJiYgZFtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpIG9mIE9iamVjdC5rZXlzKHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0uR3JhbnRSZXZva2UgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZCAmJiBkW2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEl0ZW1FZmZlY3RpdmVDbGFzcyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZXNjID0gdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGxldCBncmFudENvdW50ID0gUS5jb3VudChkZXNjLCB4ID0+IHguR3JhbnRSZXZva2UgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAoeC5HcmFudFJldm9rZSA9PSBudWxsICYmIHRoaXMucm9sZU9ySW1wbGljaXQoeC5LZXkpKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdyYW50Q291bnQgPT09IGRlc2MubGVuZ3RoIHx8IGRlc2MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhbGxvdyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdyYW50Q291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2RlbnknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAncGFydGlhbCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBncmFudGVkID0gaXRlbS5HcmFudFJldm9rZSA9PT0gdHJ1ZSB8fFxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uR3JhbnRSZXZva2UgPT0gbnVsbCAmJiB0aGlzLnJvbGVPckltcGxpY2l0KGl0ZW0uS2V5KSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKGdyYW50ZWQgPyAnIGFsbG93JyA6ICcgZGVueScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1uczogU2xpY2suQ29sdW1uW10gPSBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlBlcm1pc3Npb24nKSxcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnVGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBTZXJlbml0eS5TbGlja0Zvcm1hdHRpbmcudHJlZVRvZ2dsZSgoKSA9PiB0aGlzLnZpZXcsIHggPT4geC5LZXksIGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3MgPSB0aGlzLmdldEl0ZW1FZmZlY3RpdmVDbGFzcyhpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiZWZmZWN0aXZlLXBlcm1pc3Npb24gJyArIGtsYXNzICsgJ1wiPicgKyBRLmh0bWxFbmNvZGUoY3R4LnZhbHVlKSArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ5NSxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuR3JhbnQnKSwgZmllbGQ6ICdHcmFudCcsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzMSA9IHRoaXMuZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxzcGFuIGNsYXNzPSdjaGVjay1ib3ggZ3JhbnQgbm8tZmxvYXQgXCIgKyBrbGFzczEgKyBcIic+PC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NSxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGhlYWRlckNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJ1xyXG4gICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1Jldm9rZSkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuUmV2b2tlJyksIGZpZWxkOiAnUmV2b2tlJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMiA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3MyID0gdGhpcy5nZXRJdGVtR3JhbnRSZXZva2VDbGFzcyhpdGVtMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiY2hlY2stYm94IHJldm9rZSBuby1mbG9hdCAnICsga2xhc3MyICsgJ1wiPjwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJDc3NDbGFzczogJ2FsaWduLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0SXRlbXMoaXRlbXM6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSk6IHZvaWQge1xyXG4gICAgICAgICAgICBTZXJlbml0eS5TbGlja1RyZWVIZWxwZXIuc2V0SW5kZW50cyhpdGVtcywgeCA9PiB4LktleSwgeCA9PiB4LlBhcmVudEtleSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoaXRlbXMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld1N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld0ZpbHRlcihpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLmZpbHRlckJ5SWQoaXRlbSwgdGhpcy52aWV3LCB4ID0+IHguUGFyZW50S2V5KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFRleHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoQ29udGFpbnMoaXRlbSkgfHwgaXRlbS5Jc0dyb3VwICYmIFEuYW55KHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgZmFsc2UpLCB4ID0+IHRoaXMubWF0Y2hDb250YWlucyh4KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtYXRjaENvbnRhaW5zKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoaXRlbS5UaXRsZSB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dCkgPj0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0RGVzY2VuZGFudHMoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSwgZXhjbHVkZUdyb3VwczogYm9vbGVhbik6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgc3RhY2sgPSBbaXRlbV07XHJcbiAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5ieVBhcmVudEtleVtpLktleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGNsdWRlR3JvdXBzIHx8ICFjaGlsZC5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZSwgcm93LCBjZWxsKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLnRvZ2dsZUNsaWNrKGUsIHJvdywgY2VsbCwgdGhpcy52aWV3LCB4ID0+IHguS2V5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICBsZXQgZ3JhbnQgPSB0YXJnZXQuaGFzQ2xhc3MoJ2dyYW50Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ3JhbnQgfHwgdGFyZ2V0Lmhhc0NsYXNzKCdyZXZva2UnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja2VkT3JQYXJ0aWFsID0gdGFyZ2V0Lmhhc0NsYXNzKCdjaGVja2VkJykgfHwgdGFyZ2V0Lmhhc0NsYXNzKCdwYXJ0aWFsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRPclBhcnRpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFudCA9IGdyYW50ICE9PSBjaGVja2VkT3JQYXJ0aWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkIG9mIHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5HcmFudFJldm9rZSA9IGdyYW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkdyYW50UmV2b2tlID0gZ3JhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlja0dyaWQuaW52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFBhcmVudEtleShrZXkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBpZiAoa2V5LmNoYXJBdChrZXkubGVuZ3RoIC0gMSkgPT09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LnN1YnN0cigwLCBrZXkubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpZHggPSBrZXkubGFzdEluZGV4T2YoJzonKTtcclxuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5LnN1YnN0cigwLCBpZHggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCk6IFNlcmVuaXR5LlRvb2xCdXR0b25bXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsIChmaWVsZCwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLnRyaW1Ub051bGwodGV4dCkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXModGhpcy52aWV3LmdldEl0ZW1zKCksIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0U29ydGVkR3JvdXBBbmRQZXJtaXNzaW9uS2V5cyh0aXRsZUJ5S2V5OiBRLkRpY3Rpb25hcnk8c3RyaW5nPik6IHN0cmluZ1tdIHtcclxuICAgICAgICAgICAgbGV0IGtleXMgPSA8c3RyaW5nW10+US5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5QZXJtaXNzaW9uS2V5cycpO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGVXaXRoR3JvdXAgPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgayBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcyA9IGs7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHMuY2hhckF0KHMubGVuZ3RoIC0gMSkgPT0gJzonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcyA9IHMuc3Vic3RyKDAsIHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGVCeUtleVtzXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlQnlLZXlbc10gPSBRLmNvYWxlc2NlKFEudHJ5R2V0VGV4dCgnUGVybWlzc2lvbi4nICsgcyksIHMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gcy5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwID0gJyc7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdXBUaXRsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cCA9IGdyb3VwICsgcGFydHNbaV0gKyAnOic7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR4dCA9IFEudHJ5R2V0VGV4dCgnUGVybWlzc2lvbi4nICsgZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQgPSBwYXJ0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVCeUtleVtncm91cF0gPSB0eHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBUaXRsZSA9IGdyb3VwVGl0bGUgKyB0aXRsZUJ5S2V5W2dyb3VwXSArICc6JztcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZVdpdGhHcm91cFtncm91cF0gPSBncm91cFRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlV2l0aEdyb3VwW3NdID0gZ3JvdXBUaXRsZSArIHRpdGxlQnlLZXlbc107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh0aXRsZUJ5S2V5KTtcclxuICAgICAgICAgICAga2V5cyA9IGtleXMuc29ydCgoeCwgeSkgPT4gUS50dXJraXNoTG9jYWxlQ29tcGFyZSh0aXRsZVdpdGhHcm91cFt4XSwgdGl0bGVXaXRoR3JvdXBbeV0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IHZhbHVlKCk6IFVzZXJQZXJtaXNzaW9uUm93W10ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogVXNlclBlcm1pc3Npb25Sb3dbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZXcuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uR3JhbnRSZXZva2UgIT0gbnVsbCAmJiBpdGVtLktleS5jaGFyQXQoaXRlbS5LZXkubGVuZ3RoIC0gMSkgIT0gJzonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBQZXJtaXNzaW9uS2V5OiBpdGVtLktleSwgR3JhbnRlZDogaXRlbS5HcmFudFJldm9rZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCB2YWx1ZSh2YWx1ZTogVXNlclBlcm1pc3Npb25Sb3dbXSkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZXcuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5HcmFudFJldm9rZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChyb3cuUGVybWlzc2lvbktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgci5HcmFudFJldm9rZSA9IFEuY29hbGVzY2Uocm93LkdyYW50ZWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfcm9sZVBlcm1pc3Npb25zOiBRLkRpY3Rpb25hcnk8Ym9vbGVhbj4gPSB7fTtcclxuXHJcbiAgICAgICAgZ2V0IHJvbGVQZXJtaXNzaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yb2xlUGVybWlzc2lvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHJvbGVQZXJtaXNzaW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9sZVBlcm1pc3Npb25zID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb2xlUGVybWlzc2lvbnNba10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKHRoaXMuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9pbXBsaWNpdFBlcm1pc3Npb25zOiBRLkRpY3Rpb25hcnk8US5EaWN0aW9uYXJ5PGJvb2xlYW4+PiA9IHt9O1xyXG5cclxuICAgICAgICBzZXQgaW1wbGljaXRQZXJtaXNzaW9ucyh2YWx1ZTogUS5EaWN0aW9uYXJ5PHN0cmluZ1tdPikge1xyXG4gICAgICAgICAgICB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXSA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba10gfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSB2YWx1ZVtrXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzIG9mIGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdW3NdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uQ2hlY2tFZGl0b3JPcHRpb25zIHtcclxuICAgICAgICBzaG93UmV2b2tlPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25DaGVja0l0ZW0ge1xyXG4gICAgICAgIFBhcmVudEtleT86IHN0cmluZztcclxuICAgICAgICBLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgVGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNHcm91cD86IGJvb2xlYW47XHJcbiAgICAgICAgR3JhbnRSZXZva2U/OiBib29sZWFuO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUGVybWlzc2lvbkRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbkNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdQZXJtaXNzaW9ucycpLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93UmV2b2tlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuTGlzdFJvbGVQZXJtaXNzaW9ucyh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMucm9sZVBlcm1pc3Npb25zID0gcmVzcG9uc2UuRW50aXRpZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5pbXBsaWNpdFBlcm1pc3Npb25zID0gUS5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5JbXBsaWNpdFBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpOiBKUXVlcnlVSS5EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYnRuIGJ0bi1wcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVybWlzc2lvbnM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gUS5ub3RpZnlTdWNjZXNzKFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5TYXZlU3VjY2VzcycpKSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuRGlhbG9nVGl0bGUnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy51c2VybmFtZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGRpdiBpZD1cIn5fUGVybWlzc2lvbnNcIj48L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgdXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUNoZWNrRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuQ2hlY2tUcmVlRWRpdG9yPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55PiwgYW55PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkaXY6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihkaXYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCkge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsIChmaWVsZCwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyh0ZXh0IHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRyZWVJdGVtcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJvbGVSb3cuZ2V0TG9va3VwKCkuaXRlbXMubWFwKHJvbGUgPT4gPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55Pj57XHJcbiAgICAgICAgICAgICAgICBpZDogcm9sZS5Sb2xlSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJvbGUuUm9sZU5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSAmJlxyXG4gICAgICAgICAgICAgICAgKFEuaXNFbXB0eU9yTnVsbCh0aGlzLnNlYXJjaFRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhpdGVtLnRleHQgfHwgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hUZXh0KSA+PSAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJSb2xlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFVzZXJSb2xlRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBSb2xlQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogVXNlclJvbGVEaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFJvbGVDaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1JvbGVzJykpO1xyXG5cclxuICAgICAgICAgICAgVXNlclJvbGVTZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklEXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcy5tYXAoeCA9PiB4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKCkge1xyXG4gICAgICAgICAgICB2YXIgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLk9rQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2J0biBidG4tcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFEuc2VydmljZVJlcXVlc3QoJ0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VwZGF0ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb2xlczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZS5tYXAoeCA9PiBwYXJzZUludCh4LCAxMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuVXNlclJvbGVEaWFsb2cuU2F2ZVN1Y2Nlc3MnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuVXNlclJvbGVEaWFsb2cuRGlhbG9nVGl0bGUnKSwgdGhpcy5vcHRpb25zLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBpZD0nfl9Sb2xlcyc+PC9kaXY+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVEaWFsb2dPcHRpb25zIHtcclxuICAgICAgICB1c2VySUQ6IG51bWJlcjtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkxhbmd1YWdlTGlzdCB7XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDogc3RyaW5nW11bXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGsgb2YgQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VSb3cuZ2V0TG9va3VwKCkuaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKGsuTGFuZ3VhZ2VJZCAhPT0gJ2VuJykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goW2suSWQudG9TdHJpbmcoKSwgay5MYW5ndWFnZU5hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb24vSGVscGVycy9MYW5ndWFnZUxpc3QudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLlNjcmlwdEluaXRpYWxpemF0aW9uIHtcclxuICAgIFEuQ29uZmlnLnJlc3BvbnNpdmVEaWFsb2dzID0gdHJ1ZTtcclxuICAgIFEuQ29uZmlnLnJvb3ROYW1lc3BhY2VzLnB1c2goJ01vdmllVHV0b3JpYWwuV2ViJyk7XHJcbiAgICBTZXJlbml0eS5FbnRpdHlEaWFsb2cuZGVmYXVsdExhbmd1YWdlTGlzdCA9IExhbmd1YWdlTGlzdC5nZXRWYWx1ZTtcclxuICAgIFNlcmVuaXR5Lkh0bWxDb250ZW50RWRpdG9yLkNLRWRpdG9yQmFzZVBhdGggPSBcIn4vU2VyZW5pdHkuQXNzZXRzL1NjcmlwdHMvY2tlZGl0b3IvXCI7XHJcblxyXG4gICAgaWYgKCQuZm5bJ2NvbG9yYm94J10pIHtcclxuICAgICAgICAkLmZuWydjb2xvcmJveCddLnNldHRpbmdzLm1heFdpZHRoID0gXCI5NSVcIjtcclxuICAgICAgICAkLmZuWydjb2xvcmJveCddLnNldHRpbmdzLm1heEhlaWdodCA9IFwiOTUlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9uZXJyb3IgPSBRLkVycm9ySGFuZGxpbmcucnVudGltZUVycm9ySGFuZGxlcjtcclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFNpZGViYXJTZWFyY2ggZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcbiAgICAgICAgcHJpdmF0ZSBtZW51VUw6IEpRdWVyeTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5wdXQ6IEpRdWVyeSwgbWVudVVMOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgbmV3IFNlcmVuaXR5LlF1aWNrU2VhcmNoSW5wdXQoaW5wdXQsIHtcclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoOiAoZmllbGQsIHRleHQsIHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hdGNoRmxhZ3ModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lbnVVTCA9IG1lbnVVTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVNYXRjaEZsYWdzKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgbGlMaXN0ID0gdGhpcy5tZW51VUwuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0ID0gUS50cmltVG9OdWxsKHRleHQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnNob3coKTtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gdGV4dC5yZXBsYWNlKCcsJywgJyAnKS5zcGxpdCgnICcpLmZpbHRlcih4ID0+ICFRLmlzVHJpbW1lZEVtcHR5KHgpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gUS50cmltVG9OdWxsKFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MocGFydHNbaV0pLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBsaUxpc3Q7XHJcbiAgICAgICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24gKGlkeCwgZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSAkKGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLmNvYWxlc2NlKHgudGV4dCgpLCAnJykudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIG9mIHBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAgIT0gbnVsbCAmJiAhKHRpdGxlLmluZGV4T2YocCkgIT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0l0ZW1zID0gaXRlbXMubm90KCcubm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlzaWJsZXMgPSBtYXRjaGluZ0l0ZW1zLnBhcmVudHMoJ2xpJykuYWRkKG1hdGNoaW5nSXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5vblZpc2libGVzID0gbGlMaXN0Lm5vdCh2aXNpYmxlcyk7XHJcbiAgICAgICAgICAgIG5vblZpc2libGVzLmhpZGUoKS5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2aXNpYmxlcy5zaG93KCk7XHJcbiAgICAgICAgICAgIGxpTGlzdC5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTG9naW5QYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8TG9naW5SZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBMb2dpbkZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdMb2dpbkJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvTG9naW4nKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG9SZXR1cm5VcmwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IChyZXNwb25zZTogU2VyZW5pdHkuU2VydmljZVJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IuQ29kZSA9PSBcIlJlZGlyZWN0VXNlclRvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2UuRXJyb3IuQXJndW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvciAhPSBudWxsICYmICFRLmlzRW1wdHlPck51bGwocmVzcG9uc2UuRXJyb3IuTWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5RXJyb3IocmVzcG9uc2UuRXJyb3IuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjUGFzc3dvcmQnKS5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5FcnJvckhhbmRsaW5nLnNob3dTZXJ2aWNlRXJyb3IocmVzcG9uc2UuRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCByZWRpcmVjdFRvUmV0dXJuVXJsKCkge1xyXG4gICAgICAgICAgICB2YXIgcSA9IFEucGFyc2VRdWVyeVN0cmluZygpO1xyXG4gICAgICAgICAgICB2YXIgcmV0dXJuVXJsID0gcVsncmV0dXJuVXJsJ10gfHwgcVsnUmV0dXJuVXJsJ107XHJcbiAgICAgICAgICAgIGlmIChyZXR1cm5VcmwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzaCAhPSBudWxsICYmIGhhc2ggIT0gJyMnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblVybCArPSBoYXNoO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXR1cm5Vcmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgPGgyIGNsYXNzPVwidGV4dC1jZW50ZXIgcC00XCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke1EucmVzb2x2ZVVybChcIn4vQ29udGVudC9zaXRlL2ltYWdlcy9zZXJlbml0eS1sb2dvLXctMTI4LnBuZ1wiKX1cIlxyXG4gICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtY2lyY2xlIHAtMVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcy1zaWRlYmFyLWJhbmQtYmcpXCJcclxuICAgICAgICAgICAgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgLz4gTW92aWVUdXRvcmlhbC5XZWJcclxuICAgIDwvaDI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInMtUGFuZWwgcC00XCI+XHJcbiAgICAgICAgPGg1IGNsYXNzPVwidGV4dC1jZW50ZXIgbXktNFwiPiR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5Mb2dpblRvWW91ckFjY291bnRcIil9PC9oNT5cclxuICAgICAgICA8Zm9ybSBpZD1cIn5fRm9ybVwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwifl9Qcm9wZXJ0eUdyaWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsb2F0LWVuZCB0ZXh0LWRlY29yYXRpb24tbm9uZVwiIGhyZWY9XCIke1EucmVzb2x2ZVVybCgnfi9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkJyl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLkZvcmdvdFBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwifl9Mb2dpbkJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBteS0zIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLlNpZ25JbkJ1dHRvblwiKX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwidGV4dC1kZWNvcmF0aW9uLW5vbmVcIiBocmVmPVwiJHtRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9TaWduVXAnKX1cIj4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uU2lnblVwQnV0dG9uXCIpfTwvYT5cclxuICAgIDwvZGl2PiAgIFxyXG5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxDaGFuZ2VQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENoYW5nZVBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogQ2hhbmdlUGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IENoYW5nZVBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5OZXdQYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS53KCdDb25maXJtUGFzc3dvcmQnLCBTZXJlbml0eS5QYXNzd29yZEVkaXRvcikudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdChRLnRleHQoJ1ZhbGlkYXRpb24uTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aCcpLCA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9DaGFuZ2VQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJzLVBhbmVsXCI+XHJcbiAgICA8aDMgY2xhc3M9XCJwYWdlLXRpdGxlIG1iLTQgdGV4dC1jZW50ZXJcIj4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmQuRm9ybVRpdGxlXCIpfTwvaDM+XHJcbiAgICA8Zm9ybSBpZD1cIn5fRm9ybVwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ+X1Byb3BlcnR5R3JpZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZCBtdC00XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ+X1N1Ym1pdEJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgJHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLlN1Ym1pdEJ1dHRvblwiKX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbjwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPEZvcmdvdFBhc3N3b3JkUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gRm9yZ290UGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBGb3Jnb3RQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9yZ290UGFzc3dvcmRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvRm9yZ290UGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8UmVzZXRQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFJlc2V0UGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBSZXNldFBhc3N3b3JkRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBSZXNldFBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5OZXdQYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5OZXdQYXNzd29yZC52YWx1ZS5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEuZm9ybWF0KFEudGV4dCgnVmFsaWRhdGlvbi5NaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoJyksIDcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LlRva2VuID0gdGhpcy5ieUlkKCdUb2tlbicpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9SZXNldFBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuUmVzZXRQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvTG9naW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgU2lnblVwUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPFNpZ25VcFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFNpZ25VcEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IFNpZ25VcEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgU2lnblVwRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtRW1haWwuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybUVtYWlsLnZhbHVlICE9PSB0aGlzLmZvcm0uRW1haWwudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLkVtYWlsQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvU2lnblVwJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNwbGF5TmFtZTogdGhpcy5mb3JtLkRpc3BsYXlOYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDogdGhpcy5mb3JtLkVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDogdGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuU2lnblVwLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBHZW5yZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxHZW5yZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBHZW5yZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gR2VucmVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBHZW5yZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gR2VucmVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBHZW5yZVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gR2VucmVSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gR2VucmVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gR2VucmVSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBHZW5yZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBHZW5yZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEdlbnJlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEdlbnJlQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBHZW5yZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gR2VucmVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gR2VucmVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBHZW5yZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEdlbnJlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxNb3ZpZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBNb3ZpZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTW92aWVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBNb3ZpZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gTW92aWVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBNb3ZpZVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gTW92aWVSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gTW92aWVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gTW92aWVSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBNb3ZpZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPE1vdmllUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIE1vdmllQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBNb3ZpZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTW92aWVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gTW92aWVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBNb3ZpZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIE1vdmllU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRRdWlja1NlYXJjaEZpZWxkcygpOiBTZXJlbml0eS5RdWlja1NlYXJjaEZpZWxkW10ge1xyXG4gICAgICAgICAgICBsZXQgdHh0ID0gKHMpID0+XHJcbiAgICAgICAgICAgICAgICBRLnRleHQoYERiLiR7TW92aWVSb3cubG9jYWxUZXh0UHJlZml4fS4ke3N9YCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IFwiXCIsIHRpdGxlOiBcImFsbFwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IE1vdmllUm93LkZpZWxkcy5EZXNjcmlwdGlvbiwgdGl0bGU6IHR4dChNb3ZpZVJvdy5GaWVsZHMuRGVzY3JpcHRpb24pIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IE1vdmllUm93LkZpZWxkcy5TdG9yeWxpbmUsIHRpdGxlOiB0eHQoTW92aWVSb3cuRmllbGRzLlN0b3J5bGluZSkgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogTW92aWVSb3cuRmllbGRzLlllYXIsIHRpdGxlOiB0eHQoTW92aWVSb3cuRmllbGRzLlllYXIpIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFF1aWNrRmlsdGVycygpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gc3VwZXIuZ2V0UXVpY2tGaWx0ZXJzKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBnZW5yZUxpc3RGaWx0ZXIgPSBRLmZpcnN0KGl0ZW1zLCB4ID0+XHJcbiAgICAgICAgICAgICAgICB4LmZpZWxkID09IE1vdmllUm93LkZpZWxkcy5HZW5yZUxpc3QpO1xyXG5cclxuICAgICAgICAgICAgZ2VucmVMaXN0RmlsdGVyLmhhbmRsZXIgPSBoID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSAoaC5yZXF1ZXN0IGFzIE1vdmllTGlzdFJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gKGgud2lkZ2V0IGFzIFNlcmVuaXR5Lkxvb2t1cEVkaXRvcikudmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5HZW5yZXMgPSB2YWx1ZXMubWFwKHggPT4gcGFyc2VJbnQoeCwgMTApKTtcclxuICAgICAgICAgICAgICAgIGguaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllR2VucmVzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPE1vdmllR2VucmVzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIE1vdmllR2VucmVzRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBNb3ZpZUdlbnJlc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1vdmllR2VucmVzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTW92aWVHZW5yZXNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE1vdmllR2VucmVzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE1vdmllR2VucmVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE1vdmllR2VucmVzUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgTW92aWVHZW5yZXNGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTW92aWVHZW5yZXNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxNb3ZpZUdlbnJlc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBNb3ZpZUdlbnJlc0NvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTW92aWVHZW5yZXNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE1vdmllR2VucmVzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE1vdmllR2VucmVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTW92aWVHZW5yZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBNb3ZpZUdlbnJlc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJGb3JtYXR0ZXIoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEdlbnJlTGlzdEZvcm1hdHRlciBpbXBsZW1lbnRzIFNsaWNrLkZvcm1hdHRlciB7XHJcbiAgICAgICAgZm9ybWF0KGN0eDogU2xpY2suRm9ybWF0dGVyQ29udGV4dCkge1xyXG4gICAgICAgICAgICBsZXQgaWRMaXN0ID0gY3R4LnZhbHVlIGFzIG51bWJlcltdO1xyXG4gICAgICAgICAgICBpZiAoIWlkTGlzdCB8fCAhaWRMaXN0Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJ5SWQgPSBHZW5yZVJvdy5nZXRMb29rdXAoKS5pdGVtQnlJZDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpZExpc3QubWFwKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGcgPSBieUlkW3hdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuaHRtbEVuY29kZShnLk5hbWUpO1xyXG4gICAgICAgICAgICB9KS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNb3ZpZUxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlcXVlc3Qge1xyXG4gICAgICAgIEdlbnJlcz86IG51bWJlcltdO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgY2xhc3MgUGVyc29uQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnTW92aWVEQi5QZXJzb24nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJzb25Gb3JtIHtcclxuICAgICAgICBGaXJzdE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBMYXN0bmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEJpcnRoZGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBCaXJ0aFBsYWNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgR2VuZGVyOiBTZXJlbml0eS5FbnVtRWRpdG9yO1xyXG4gICAgICAgIEhlaWdodDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUGVyc29uRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTW92aWVEQi5QZXJzb24nO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVBlcnNvbkZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFBlcnNvbkZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5FbnVtRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFBlcnNvbkZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRmlyc3ROYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhc3RuYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JpcnRoZGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdCaXJ0aFBsYWNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dlbmRlcicsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdIZWlnaHQnLCB3M1xyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJzb25Sb3cge1xyXG4gICAgICAgIFBlcnNvbklkPzogbnVtYmVyO1xyXG4gICAgICAgIEZpcnN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBMYXN0bmFtZT86IHN0cmluZztcclxuICAgICAgICBGdWxsbmFtZT86IHN0cmluZztcclxuICAgICAgICBCaXJ0aGRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQmlydGhQbGFjZT86IHN0cmluZztcclxuICAgICAgICBHZW5kZXI/OiBHZW5kZXI7XHJcbiAgICAgICAgSGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUGVyc29uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdQZXJzb25JZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdGdWxsbmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdNb3ZpZURCLlBlcnNvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdNb3ZpZURCLlBlcnNvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8UGVyc29uUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxQZXJzb25Sb3c+KCdNb3ZpZURCLlBlcnNvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUGVyc29uSWQgPSBcIlBlcnNvbklkXCIsXHJcbiAgICAgICAgICAgIEZpcnN0TmFtZSA9IFwiRmlyc3ROYW1lXCIsXHJcbiAgICAgICAgICAgIExhc3RuYW1lID0gXCJMYXN0bmFtZVwiLFxyXG4gICAgICAgICAgICBGdWxsbmFtZSA9IFwiRnVsbG5hbWVcIixcclxuICAgICAgICAgICAgQmlydGhkYXRlID0gXCJCaXJ0aGRhdGVcIixcclxuICAgICAgICAgICAgQmlydGhQbGFjZSA9IFwiQmlydGhQbGFjZVwiLFxyXG4gICAgICAgICAgICBHZW5kZXIgPSBcIkdlbmRlclwiLFxyXG4gICAgICAgICAgICBIZWlnaHQgPSBcIkhlaWdodFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUGVyc29uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTW92aWVEQi9QZXJzb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UGVyc29uUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UGVyc29uUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFBlcnNvblJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxQZXJzb25Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiTW92aWVEQi9QZXJzb24vQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiTW92aWVEQi9QZXJzb24vVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTW92aWVEQi9QZXJzb24vRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJNb3ZpZURCL1BlcnNvbi9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJNb3ZpZURCL1BlcnNvbi9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+UGVyc29uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZXNwb25zaXZlKCkgICAgXHJcbiAgICBleHBvcnQgY2xhc3MgUGVyc29uRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFBlcnNvblJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBQZXJzb25Gb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFBlcnNvblJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFBlcnNvblJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUGVyc29uUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUGVyc29uU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQZXJzb25Sb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUGVyc29uUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFBlcnNvblJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFBlcnNvbkZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbW92aWVzR3JpZDogUGVyc29uTW92aWVHcmlkO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW92aWVzR3JpZCA9IG5ldyBQZXJzb25Nb3ZpZUdyaWQodGhpcy5ieUlkKFwiTW92aWVzR3JpZFwiKSk7XHJcbiAgICAgICAgICAgIHRoaXMudGFicy5vbigndGFic2FjdGl2YXRlJywgKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYW5nZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGlkPVwifl9UYWJzXCIgY2xhc3M9XCJzLURpYWxvZ0NvbnRlbnRcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiN+X1RhYkluZm9cIj4gPHNwYW4+UGVyc29uPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjfl9UYWJNb3ZpZXNcIj48c3Bhbj5Nb3ZpZXM8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2IGlkID0gXCJ+X1RhYkluZm9cIiBjbGFzcz1cInRhYi1wYW5lIHMtVGFiSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9IFwifl9Ub29sYmFyXCIgY2xhc3M9XCJzLURpYWxvZ1Rvb2xiYXJcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInMtRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJ+X0Zvcm1cIiBhY3Rpb24gPSBcIlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkc2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwifl9Qcm9wZXJ0eUdyaWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9IFwifl9UYWJNb3ZpZXNcIiBjbGFzcz1cInRhYi1wYW5lIHMtVGFiTW92aWVzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwifl9Nb3ZpZXNHcmlkXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhZnRlckxvYWRFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFmdGVyTG9hZEVudGl0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmllc0dyaWQucGVyc29uSUQgPSB0aGlzLmVudGl0eUlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUGVyc29uR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UGVyc29uUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFBlcnNvbkNvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUGVyc29uRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBQZXJzb25Sb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUGVyc29uUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUGVyc29uUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUGVyc29uU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGVudW0gR2VuZGVyIHtcclxuICAgICAgICBNYWxlID0gMSxcclxuICAgICAgICBGZW1hbGUgPSAyXHJcbiAgICB9XHJcbiAgICBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRW51bVR5cGUoR2VuZGVyLCAnTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQi5HZW5kZXInLCAnTW92aWVEQi5HZW5kZXInKTtcclxufVxyXG4iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllQ2FzdENvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ01vdmllREIuTW92aWVDYXN0JztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTW92aWVDYXN0Rm9ybSB7XHJcbiAgICAgICAgUGVyc29uSWQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBDaGFyYWN0ZXI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTW92aWVDYXN0Rm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTW92aWVEQi5Nb3ZpZUNhc3QnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIU1vdmllQ2FzdEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIE1vdmllQ2FzdEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTW92aWVDYXN0Rm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdQZXJzb25JZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDaGFyYWN0ZXInLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNb3ZpZUNhc3RSb3cge1xyXG4gICAgICAgIE1vdmllQ2FzdElkPzogbnVtYmVyO1xyXG4gICAgICAgIE1vdmllSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVyc29uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgQ2hhcmFjdGVyPzogc3RyaW5nO1xyXG4gICAgICAgIE1vdmllVGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVEZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgICAgICBNb3ZpZVN0b3J5bGluZT86IHN0cmluZztcclxuICAgICAgICBNb3ZpZVllYXI/OiBudW1iZXI7XHJcbiAgICAgICAgTW92aWVSZWxlYXNlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBNb3ZpZVJ1bnRpbWU/OiBudW1iZXI7XHJcbiAgICAgICAgTW92aWVLaW5kPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcnNvbkZpcnN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBQZXJzb25MYXN0bmFtZT86IHN0cmluZztcclxuICAgICAgICBQZXJzb25GdWxsbmFtZT86IHN0cmluZztcclxuICAgICAgICBQZXJzb25CaXJ0aGRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVyc29uQmlydGhQbGFjZT86IHN0cmluZztcclxuICAgICAgICBQZXJzb25HZW5kZXI/OiBudW1iZXI7XHJcbiAgICAgICAgUGVyc29uSGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTW92aWVDYXN0Um93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdNb3ZpZUNhc3RJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdDaGFyYWN0ZXInO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnTW92aWVEQi5Nb3ZpZUNhc3QnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBNb3ZpZUNhc3RJZCA9IFwiTW92aWVDYXN0SWRcIixcclxuICAgICAgICAgICAgTW92aWVJZCA9IFwiTW92aWVJZFwiLFxyXG4gICAgICAgICAgICBQZXJzb25JZCA9IFwiUGVyc29uSWRcIixcclxuICAgICAgICAgICAgQ2hhcmFjdGVyID0gXCJDaGFyYWN0ZXJcIixcclxuICAgICAgICAgICAgTW92aWVUaXRsZSA9IFwiTW92aWVUaXRsZVwiLFxyXG4gICAgICAgICAgICBNb3ZpZURlc2NyaXB0aW9uID0gXCJNb3ZpZURlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIE1vdmllU3RvcnlsaW5lID0gXCJNb3ZpZVN0b3J5bGluZVwiLFxyXG4gICAgICAgICAgICBNb3ZpZVllYXIgPSBcIk1vdmllWWVhclwiLFxyXG4gICAgICAgICAgICBNb3ZpZVJlbGVhc2VEYXRlID0gXCJNb3ZpZVJlbGVhc2VEYXRlXCIsXHJcbiAgICAgICAgICAgIE1vdmllUnVudGltZSA9IFwiTW92aWVSdW50aW1lXCIsXHJcbiAgICAgICAgICAgIE1vdmllS2luZCA9IFwiTW92aWVLaW5kXCIsXHJcbiAgICAgICAgICAgIFBlcnNvbkZpcnN0TmFtZSA9IFwiUGVyc29uRmlyc3ROYW1lXCIsXHJcbiAgICAgICAgICAgIFBlcnNvbkxhc3RuYW1lID0gXCJQZXJzb25MYXN0bmFtZVwiLFxyXG4gICAgICAgICAgICBQZXJzb25GdWxsbmFtZSA9IFwiUGVyc29uRnVsbG5hbWVcIixcclxuICAgICAgICAgICAgUGVyc29uQmlydGhkYXRlID0gXCJQZXJzb25CaXJ0aGRhdGVcIixcclxuICAgICAgICAgICAgUGVyc29uQmlydGhQbGFjZSA9IFwiUGVyc29uQmlydGhQbGFjZVwiLFxyXG4gICAgICAgICAgICBQZXJzb25HZW5kZXIgPSBcIlBlcnNvbkdlbmRlclwiLFxyXG4gICAgICAgICAgICBQZXJzb25IZWlnaHQgPSBcIlBlcnNvbkhlaWdodFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTW92aWVDYXN0U2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTW92aWVEQi9Nb3ZpZUNhc3QnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TW92aWVDYXN0Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TW92aWVDYXN0Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPE1vdmllQ2FzdFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxNb3ZpZUNhc3RSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiTW92aWVEQi9Nb3ZpZUNhc3QvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiTW92aWVEQi9Nb3ZpZUNhc3QvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTW92aWVEQi9Nb3ZpZUNhc3QvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJNb3ZpZURCL01vdmllQ2FzdC9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJNb3ZpZURCL01vdmllQ2FzdC9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+TW92aWVDYXN0U2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTW92aWVDYXN0RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPE1vdmllQ2FzdFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBNb3ZpZUNhc3RGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gTW92aWVDYXN0Um93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTW92aWVDYXN0U2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBNb3ZpZUNhc3RSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gTW92aWVDYXN0Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IE1vdmllQ2FzdEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZUNhc3RHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxNb3ZpZUNhc3RSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gTW92aWVDYXN0Q29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBNb3ZpZUNhc3REaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBNb3ZpZUNhc3RSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBNb3ZpZUNhc3RSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBNb3ZpZUNhc3RTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZUNhc3RFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5FeHRlbnNpb25zLkdyaWRFZGl0b3JCYXNlPE1vdmllQ2FzdFJvdz4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJNb3ZpZURCLk1vdmllQ2FzdFwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBNb3ZpZUNhc3RFZGl0RGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRBZGRCdXR0b25DYXB0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJBZGRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2YWxpZGF0ZUVudGl0eShyb3c6IE1vdmllQ2FzdFJvdywgaWQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICBpZiAoIXN1cGVyLnZhbGlkYXRlRW50aXR5KHJvdywgaWQpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgcm93LlBlcnNvbkZ1bGxuYW1lID0gUGVyc29uUm93LmdldExvb2t1cCgpXHJcbiAgICAgICAgICAgICAgICAuaXRlbUJ5SWRbcm93LlBlcnNvbklkXS5GdWxsbmFtZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIH0gICAiLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllQ2FzdEVkaXREaWFsb2cgZXh0ZW5kc1xyXG4gICAgICAgIFNlcmVuaXR5LkV4dGVuc2lvbnMuR3JpZEVkaXRvckRpYWxvZzxNb3ZpZUNhc3RSb3c+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIE1vdmllQ2FzdEZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBNb3ZpZUNhc3RSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm06IE1vdmllQ2FzdEZvcm0gPSBuZXcgTW92aWVDYXN0Rm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQZXJzb25Nb3ZpZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPE1vdmllQ2FzdFJvdywgYW55PlxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJNb3ZpZURCLlBlcnNvbk1vdmllXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIE1vdmllQ2FzdFNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluaXRpYWxUaXRsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXNlUGFnZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRHcmlkQ2FuTG9hZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVyc29uSUQgIT0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX3BlcnNvbklEOiBudW1iZXI7XHJcblxyXG4gICAgICAgIGdldCBwZXJzb25JRCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BlcnNvbklEO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHBlcnNvbklEKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BlcnNvbklEICE9IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wZXJzb25JRCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcXVhbGl0eShNb3ZpZUNhc3RSb3cuRmllbGRzLlBlcnNvbklkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgY2xhc3MgUGVyc29uTW92aWVDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdNb3ZpZURCLlBlcnNvbk1vdmllJztcclxuICAgIH1cclxufVxyXG4iXX0=