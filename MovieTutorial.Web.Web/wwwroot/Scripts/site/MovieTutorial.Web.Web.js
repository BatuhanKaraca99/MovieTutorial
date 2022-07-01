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
                    return "<div id=\"~_Tabs\" class=\"s-DialogContent\">\n            <ul>\n                <li><a href=\"#~_TabInfo\"><span>Person</span></a></li>\n                <li><a href=\"#~_TabMovies\"><span>Movies</span></a></li>\n            </ul>\n            <div id=\"~_TabInfo\" class=\"tab-pane s-TabInfo\">\n                <div id=\"~_Toolbar\" class=\"s-DialogToolbar\">\n                </div>\n                <div class=\"s-Form\">\n                    <form id=\"~_Form\" action=\"\">\n                        <div class=\"fieldset\">\n                            <div id=\"~_PropertyGrid\"></div>\n                            <div class=\"clear\"></div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div id=\"~_TabMovies\" class=\"tab-pane s-TabMovies\">\n                <div id=\"~_MoviesGrid\">\n\n                </div>\n            </div>\n        </div>";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVUdXRvcmlhbC5XZWIuV2ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlBlcm1pc3Npb25LZXlzLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25Sb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uSXRlbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbkxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvblVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlckNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlckZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVMaXN0UmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuTG9naW5Gb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuTG9naW5SZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlNpZ25VcEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5TaWduVXBSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuR2VuZGVyLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuR2VucmVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuR2VucmVGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuR2VucmVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5HZW5yZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5Nb3ZpZUNhc3RDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuTW92aWVDYXN0Rm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllQ2FzdFJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllQ2FzdFNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5Nb3ZpZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5Nb3ZpZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5Nb3ZpZUdlbnJlc0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5Nb3ZpZUdlbnJlc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5Nb3ZpZUdlbnJlc1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllR2VucmVzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5Nb3ZpZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLk1vdmllU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZURCLlBlcnNvbkNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTW92aWVEQi5QZXJzb25Gb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuUGVyc29uTW92aWVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuUGVyc29uUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01vdmllREIuUGVyc29uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Nb3ZpZVR1dG9yaWFsLk1vdmllS2luZC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TY3JpcHRVc2VyRGVmaW5pdGlvbi50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9UZXh0cy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGFuZ3VhZ2VEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xhbmd1YWdlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZS9Sb2xlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlL1JvbGVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9Sb2xlUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vVHJhbnNsYXRpb25HcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL1VzZXJEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvVXNlckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvQXV0aGVudGljYXRpb24vQXV0aG9yaXphdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vUGVybWlzc2lvbkNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9Vc2VyUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvUm9sZUNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9Vc2VyUm9sZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvTGFuZ3VhZ2VMaXN0LnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vU2NyaXB0SW5pdGlhbGl6YXRpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9OYXZpZ2F0aW9uL1NpZGViYXJTZWFyY2gudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9Mb2dpblBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvQ2hhbmdlUGFzc3dvcmQvQ2hhbmdlUGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9SZXNldFBhc3N3b3JkL1Jlc2V0UGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L1NpZ25VcC9TaWduVXBQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTW92aWVEQi9HZW5yZS9HZW5yZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTW92aWVEQi9HZW5yZS9HZW5yZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01vdmllREIvTW92aWUvR2VucmVMaXN0Rm9ybWF0dGVyLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL01vdmllL01vdmllRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL01vdmllL01vdmllR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTW92aWVEQi9Nb3ZpZUNhc3QvTW92aWVDYXN0RWRpdERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTW92aWVEQi9Nb3ZpZUNhc3QvTW92aWVDYXN0RWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL01vdmllR2VucmVzL01vdmllR2VucmVzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL01vdmllR2VucmVzL01vdmllR2VucmVzR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTW92aWVEQi9QZXJzb24vUGVyc29uRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL1BlcnNvbi9QZXJzb25HcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Nb3ZpZURCL1BlcnNvbi9QZXJzb25Nb3ZpZUdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxhQUFhLENBSXRCO0FBSkQsV0FB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QyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsRUFBQyxXQUFXLEVBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLFVBQVUsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyx5QkFBeUIsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxZQUFZLEVBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLG1CQUFtQixFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsaUJBQWlCLEVBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxFQUFDLG9CQUFvQixFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxxQkFB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QUFDLEVBekMyQixPQUFPLEdBQVAsV0FBTyxLQUFQLFdBQU8sUUF5Q2xDO0lBQUQsQ0FBQyxFQXpDdUIsR0FBRyxHQUFILGlCQUFHLEtBQUgsaUJBQUcsUUF5QzFCO0FBQUQsQ0FBQyxFQXpDUyxhQUFhLEtBQWIsYUFBYSxRQXlDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlRm9ybSB7XHJcbiAgICAgICAgTGFuZ3VhZ2VJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIExhbmd1YWdlTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFMYW5ndWFnZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIExhbmd1YWdlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTGFuZ3VhZ2VGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhbmd1YWdlSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGFuZ3VhZ2VOYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBJZD86IG51bWJlcjtcclxuICAgICAgICBMYW5ndWFnZUlkPzogc3RyaW5nO1xyXG4gICAgICAgIExhbmd1YWdlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdMYW5ndWFnZU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnV2ViLkFkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxMYW5ndWFnZVJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8TGFuZ3VhZ2VSb3c+KCdXZWIuQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcclxuICAgICAgICAgICAgTGFuZ3VhZ2VJZCA9IFwiTGFuZ3VhZ2VJZFwiLFxyXG4gICAgICAgICAgICBMYW5ndWFnZU5hbWUgPSBcIkxhbmd1YWdlTmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TGFuZ3VhZ2VSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxMYW5ndWFnZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxMYW5ndWFnZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxMYW5ndWFnZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5MYW5ndWFnZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQZXJtaXNzaW9uS2V5cyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFNlY3VyaXR5ID0gXCJBZG1pbmlzdHJhdGlvbjpTZWN1cml0eVwiO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBUcmFuc2xhdGlvbiA9IFwiQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb25cIjtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlRm9ybSB7XHJcbiAgICAgICAgUm9sZU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJvbGVGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSb2xlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUm9sZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUm9sZU5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25MaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBSb2xlSUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPiB7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBSb2xlUGVybWlzc2lvbklkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBQZXJtaXNzaW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFJvbGVSb2xlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdSb2xlUGVybWlzc2lvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Blcm1pc3Npb25LZXknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25JZCA9IFwiUm9sZVBlcm1pc3Npb25JZFwiLFxyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBQZXJtaXNzaW9uS2V5ID0gXCJQZXJtaXNzaW9uS2V5XCIsXHJcbiAgICAgICAgICAgIFJvbGVSb2xlTmFtZSA9IFwiUm9sZVJvbGVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb25TZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBSb2xlUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBSb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFJvbGVQZXJtaXNzaW9uTGlzdFJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Um9sZVBlcm1pc3Npb25TZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcm1pc3Npb25zPzogc3RyaW5nW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVSb3cge1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1JvbGVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdSb2xlTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFJvbGVSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFJvbGVSb3c+KCdBZG1pbmlzdHJhdGlvbi5Sb2xlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgUm9sZU5hbWUgPSBcIlJvbGVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Um9sZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJvbGVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Um9sZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxSb2xlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uSXRlbSB7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFNvdXJjZVRleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVGFyZ2V0VGV4dD86IHN0cmluZztcclxuICAgICAgICBDdXN0b21UZXh0Pzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlcXVlc3Qge1xyXG4gICAgICAgIFNvdXJjZUxhbmd1YWdlSUQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVGFyZ2V0TGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVHJhbnNsYXRpb25TZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9UcmFuc2xhdGlvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVHJhbnNsYXRpb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VHJhbnNsYXRpb25JdGVtPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBUcmFuc2xhdGlvblVwZGF0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL0xpc3RcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9UcmFuc2xhdGlvbi9VcGRhdGVcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnTGlzdCcsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJ1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VHJhbnNsYXRpb25TZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFRhcmdldExhbmd1YWdlSUQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVHJhbnNsYXRpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlckZvcm0ge1xyXG4gICAgICAgIFVzZXJuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGlzcGxheU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbWFpbDogU2VyZW5pdHkuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgVXNlckltYWdlOiBTZXJlbml0eS5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmRDb25maXJtOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBTb3VyY2U6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVVzZXJGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBVc2VyRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkVtYWlsRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoVXNlckZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVXNlcm5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGlzcGxheU5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVXNlckltYWdlJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkQ29uZmlybScsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdTb3VyY2UnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIFVzZXJQZXJtaXNzaW9uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcm1pc3Npb25LZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgR3JhbnRlZD86IGJvb2xlYW47XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VyUGVybWlzc2lvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Blcm1pc3Npb25LZXknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25JZCA9IFwiVXNlclBlcm1pc3Npb25JZFwiLFxyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBQZXJtaXNzaW9uS2V5ID0gXCJQZXJtaXNzaW9uS2V5XCIsXHJcbiAgICAgICAgICAgIEdyYW50ZWQgPSBcIkdyYW50ZWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXIgPSBcIlVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFVzZXJQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFVzZXJQZXJtaXNzaW9uUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RSb2xlUGVybWlzc2lvbnMocmVxdWVzdDogVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RQZXJtaXNzaW9uS2V5cyhyZXF1ZXN0OiBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9MaXN0XCIsXHJcbiAgICAgICAgICAgIExpc3RSb2xlUGVybWlzc2lvbnMgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RSb2xlUGVybWlzc2lvbnNcIixcclxuICAgICAgICAgICAgTGlzdFBlcm1pc3Npb25LZXlzID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9MaXN0UGVybWlzc2lvbktleXNcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdMaXN0Um9sZVBlcm1pc3Npb25zJywgXHJcbiAgICAgICAgICAgICdMaXN0UGVybWlzc2lvbktleXMnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiBVc2VyUGVybWlzc2lvblJvd1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVMaXN0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVzcG9uc2U8bnVtYmVyPiB7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlUm93IHtcclxuICAgICAgICBVc2VyUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb2xlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VyUm9sZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFVzZXJSb2xlSWQgPSBcIlVzZXJSb2xlSWRcIixcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXIgPSBcIlVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm9sZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFVzZXJSb2xlVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFVzZXJSb2xlTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogVXNlclJvbGVMaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyUm9sZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZVVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVzPzogbnVtYmVyW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb3cge1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBTb3VyY2U/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRIYXNoPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkU2FsdD86IHN0cmluZztcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgICAgICBVc2VySW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdERpcmVjdG9yeVVwZGF0ZT86IHN0cmluZztcclxuICAgICAgICBJc0FjdGl2ZT86IG51bWJlcjtcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZENvbmZpcm0/OiBzdHJpbmc7XHJcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIEluc2VydERhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRlVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VySWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpc0FjdGl2ZVByb3BlcnR5ID0gJ0lzQWN0aXZlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1VzZXJuYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8VXNlclJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8VXNlclJvdz4oJ0FkbWluaXN0cmF0aW9uLlVzZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgU291cmNlID0gXCJTb3VyY2VcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRIYXNoID0gXCJQYXNzd29yZEhhc2hcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRTYWx0ID0gXCJQYXNzd29yZFNhbHRcIixcclxuICAgICAgICAgICAgRGlzcGxheU5hbWUgPSBcIkRpc3BsYXlOYW1lXCIsXHJcbiAgICAgICAgICAgIEVtYWlsID0gXCJFbWFpbFwiLFxyXG4gICAgICAgICAgICBVc2VySW1hZ2UgPSBcIlVzZXJJbWFnZVwiLFxyXG4gICAgICAgICAgICBMYXN0RGlyZWN0b3J5VXBkYXRlID0gXCJMYXN0RGlyZWN0b3J5VXBkYXRlXCIsXHJcbiAgICAgICAgICAgIElzQWN0aXZlID0gXCJJc0FjdGl2ZVwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZCA9IFwiUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRDb25maXJtID0gXCJQYXNzd29yZENvbmZpcm1cIixcclxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcclxuICAgICAgICAgICAgSW5zZXJ0RGF0ZSA9IFwiSW5zZXJ0RGF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VXNlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFVzZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVW5kZWxldGUocmVxdWVzdDogU2VyZW5pdHkuVW5kZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlVuZGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxVc2VyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFVzZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFVuZGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL1VuZGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdVbmRlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBPbGRQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ2hhbmdlUGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2hhbmdlUGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ09sZFBhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05ld1Bhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENoYW5nZVBhc3N3b3JkUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBPbGRQYXNzd29yZD86IHN0cmluZztcclxuICAgICAgICBOZXdQYXNzd29yZD86IHN0cmluZztcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRm9yZ290UGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBFbWFpbDogU2VyZW5pdHkuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmQnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUZvcmdvdFBhc3N3b3JkRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgRm9yZ290UGFzc3dvcmRGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShGb3Jnb3RQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBGb3Jnb3RQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTG9naW5Gb3JtIHtcclxuICAgICAgICBVc2VybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkxvZ2luJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFMb2dpbkZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIExvZ2luRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKExvZ2luRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VybmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHcxXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExvZ2luUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNldFBhc3N3b3JkRm9ybSB7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmQnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJlc2V0UGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZXNldFBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSZXNldFBhc3N3b3JkRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdOZXdQYXNzd29yZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtUGFzc3dvcmQnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNldFBhc3N3b3JkUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBUb2tlbj86IHN0cmluZztcclxuICAgICAgICBOZXdQYXNzd29yZD86IHN0cmluZztcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2lnblVwRm9ybSB7XHJcbiAgICAgICAgRGlzcGxheU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbWFpbDogU2VyZW5pdHkuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1FbWFpbDogU2VyZW5pdHkuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTaWduVXBGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLlNpZ25VcCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghU2lnblVwRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgU2lnblVwRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoU2lnblVwRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2lnblVwUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGVudW0gR2VuZGVyIHtcclxuICAgICAgICBNYWxlID0gMSxcclxuICAgICAgICBGZW1hbGUgPSAyXHJcbiAgICB9XHJcbiAgICBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRW51bVR5cGUoR2VuZGVyLCAnTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQi5HZW5kZXInLCAnTW92aWVEQi5HZW5kZXInKTtcclxufVxyXG4iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGNsYXNzIEdlbnJlQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnTW92aWVEQi5HZW5yZSc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdlbnJlRm9ybSB7XHJcbiAgICAgICAgTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBHZW5yZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01vdmllREIuR2VucmUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUdlbnJlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgR2VucmVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShHZW5yZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTmFtZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdlbnJlUm93IHtcclxuICAgICAgICBHZW5yZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBHZW5yZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnR2VucmVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ01vdmllREIuR2VucmUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnTW92aWVEQi5HZW5yZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8R2VucmVSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPEdlbnJlUm93PignTW92aWVEQi5HZW5yZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgR2VucmVJZCA9IFwiR2VucmVJZFwiLFxyXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBHZW5yZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ01vdmllREIvR2VucmUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8R2VucmVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxHZW5yZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxHZW5yZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxHZW5yZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJNb3ZpZURCL0dlbnJlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIk1vdmllREIvR2VucmUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTW92aWVEQi9HZW5yZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk1vdmllREIvR2VucmUvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiTW92aWVEQi9HZW5yZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+R2VucmVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZUNhc3RDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdNb3ZpZURCLk1vdmllQ2FzdCc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIE1vdmllQ2FzdEZvcm0ge1xyXG4gICAgICAgIFBlcnNvbklkOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgQ2hhcmFjdGVyOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllQ2FzdEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01vdmllREIuTW92aWVDYXN0JztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFNb3ZpZUNhc3RGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBNb3ZpZUNhc3RGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkxvb2t1cEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKE1vdmllQ2FzdEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUGVyc29uSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ2hhcmFjdGVyJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTW92aWVDYXN0Um93IHtcclxuICAgICAgICBNb3ZpZUNhc3RJZD86IG51bWJlcjtcclxuICAgICAgICBNb3ZpZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcnNvbklkPzogbnVtYmVyO1xyXG4gICAgICAgIENoYXJhY3Rlcj86IHN0cmluZztcclxuICAgICAgICBNb3ZpZVRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIE1vdmllRGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVTdG9yeWxpbmU/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVZZWFyPzogbnVtYmVyO1xyXG4gICAgICAgIE1vdmllUmVsZWFzZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVSdW50aW1lPzogbnVtYmVyO1xyXG4gICAgICAgIE1vdmllS2luZD86IG51bWJlcjtcclxuICAgICAgICBQZXJzb25GaXJzdE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVyc29uTGFzdG5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVyc29uRnVsbG5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVyc29uQmlydGhkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcnNvbkJpcnRoUGxhY2U/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVyc29uR2VuZGVyPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcnNvbkhlaWdodD86IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE1vdmllQ2FzdFJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnTW92aWVDYXN0SWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnQ2hhcmFjdGVyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ01vdmllREIuTW92aWVDYXN0JztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgTW92aWVDYXN0SWQgPSBcIk1vdmllQ2FzdElkXCIsXHJcbiAgICAgICAgICAgIE1vdmllSWQgPSBcIk1vdmllSWRcIixcclxuICAgICAgICAgICAgUGVyc29uSWQgPSBcIlBlcnNvbklkXCIsXHJcbiAgICAgICAgICAgIENoYXJhY3RlciA9IFwiQ2hhcmFjdGVyXCIsXHJcbiAgICAgICAgICAgIE1vdmllVGl0bGUgPSBcIk1vdmllVGl0bGVcIixcclxuICAgICAgICAgICAgTW92aWVEZXNjcmlwdGlvbiA9IFwiTW92aWVEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICBNb3ZpZVN0b3J5bGluZSA9IFwiTW92aWVTdG9yeWxpbmVcIixcclxuICAgICAgICAgICAgTW92aWVZZWFyID0gXCJNb3ZpZVllYXJcIixcclxuICAgICAgICAgICAgTW92aWVSZWxlYXNlRGF0ZSA9IFwiTW92aWVSZWxlYXNlRGF0ZVwiLFxyXG4gICAgICAgICAgICBNb3ZpZVJ1bnRpbWUgPSBcIk1vdmllUnVudGltZVwiLFxyXG4gICAgICAgICAgICBNb3ZpZUtpbmQgPSBcIk1vdmllS2luZFwiLFxyXG4gICAgICAgICAgICBQZXJzb25GaXJzdE5hbWUgPSBcIlBlcnNvbkZpcnN0TmFtZVwiLFxyXG4gICAgICAgICAgICBQZXJzb25MYXN0bmFtZSA9IFwiUGVyc29uTGFzdG5hbWVcIixcclxuICAgICAgICAgICAgUGVyc29uRnVsbG5hbWUgPSBcIlBlcnNvbkZ1bGxuYW1lXCIsXHJcbiAgICAgICAgICAgIFBlcnNvbkJpcnRoZGF0ZSA9IFwiUGVyc29uQmlydGhkYXRlXCIsXHJcbiAgICAgICAgICAgIFBlcnNvbkJpcnRoUGxhY2UgPSBcIlBlcnNvbkJpcnRoUGxhY2VcIixcclxuICAgICAgICAgICAgUGVyc29uR2VuZGVyID0gXCJQZXJzb25HZW5kZXJcIixcclxuICAgICAgICAgICAgUGVyc29uSGVpZ2h0ID0gXCJQZXJzb25IZWlnaHRcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE1vdmllQ2FzdFNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ01vdmllREIvTW92aWVDYXN0JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PE1vdmllQ2FzdFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PE1vdmllQ2FzdFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxNb3ZpZUNhc3RSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8TW92aWVDYXN0Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIk1vdmllREIvTW92aWVDYXN0L0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIk1vdmllREIvTW92aWVDYXN0L1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIk1vdmllREIvTW92aWVDYXN0L0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiTW92aWVEQi9Nb3ZpZUNhc3QvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiTW92aWVEQi9Nb3ZpZUNhc3QvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pk1vdmllQ2FzdFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnTW92aWVEQi5Nb3ZpZSc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIE1vdmllRm9ybSB7XHJcbiAgICAgICAgVGl0bGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEZXNjcmlwdGlvbjogU2VyZW5pdHkuVGV4dEFyZWFFZGl0b3I7XHJcbiAgICAgICAgQ2FzdExpc3Q6IE1vdmllQ2FzdEVkaXRvcjtcclxuICAgICAgICBTdG9yeWxpbmU6IFNlcmVuaXR5LlRleHRBcmVhRWRpdG9yO1xyXG4gICAgICAgIFllYXI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgUmVsZWFzZURhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgR2VucmVMaXN0OiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgS2luZDogU2VyZW5pdHkuRW51bUVkaXRvcjtcclxuICAgICAgICBSdW50aW1lOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01vdmllREIuTW92aWUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIU1vdmllRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTW92aWVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuVGV4dEFyZWFFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBNb3ZpZUNhc3RFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzQgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzUgPSBzLkxvb2t1cEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NiA9IHMuRW51bUVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShNb3ZpZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVGl0bGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ2FzdExpc3QnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnU3RvcnlsaW5lJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1llYXInLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnUmVsZWFzZURhdGUnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnR2VucmVMaXN0JywgdzUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0tpbmQnLCB3NixcclxuICAgICAgICAgICAgICAgICAgICAnUnVudGltZScsIHczXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllR2VucmVzQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnTW92aWVEQi5Nb3ZpZUdlbnJlcyc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIE1vdmllR2VucmVzRm9ybSB7XHJcbiAgICAgICAgTW92aWVJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBHZW5yZUlkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZUdlbnJlc0Zvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01vdmllREIuTW92aWVHZW5yZXMnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIU1vdmllR2VucmVzRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTW92aWVHZW5yZXNGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkludGVnZXJFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTW92aWVHZW5yZXNGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ01vdmllSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnR2VucmVJZCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIE1vdmllR2VucmVzUm93IHtcclxuICAgICAgICBNb3ZpZUdlbnJlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW92aWVJZD86IG51bWJlcjtcclxuICAgICAgICBHZW5yZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIE1vdmllVGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVEZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgICAgICBNb3ZpZVN0b3J5bGluZT86IHN0cmluZztcclxuICAgICAgICBNb3ZpZVllYXI/OiBudW1iZXI7XHJcbiAgICAgICAgTW92aWVSZWxlYXNlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBNb3ZpZVJ1bnRpbWU/OiBudW1iZXI7XHJcbiAgICAgICAgTW92aWVLaW5kPzogbnVtYmVyO1xyXG4gICAgICAgIEdlbnJlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE1vdmllR2VucmVzUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdNb3ZpZUdlbnJlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnTW92aWVEQi5Nb3ZpZUdlbnJlcyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIE1vdmllR2VucmVJZCA9IFwiTW92aWVHZW5yZUlkXCIsXHJcbiAgICAgICAgICAgIE1vdmllSWQgPSBcIk1vdmllSWRcIixcclxuICAgICAgICAgICAgR2VucmVJZCA9IFwiR2VucmVJZFwiLFxyXG4gICAgICAgICAgICBNb3ZpZVRpdGxlID0gXCJNb3ZpZVRpdGxlXCIsXHJcbiAgICAgICAgICAgIE1vdmllRGVzY3JpcHRpb24gPSBcIk1vdmllRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgTW92aWVTdG9yeWxpbmUgPSBcIk1vdmllU3RvcnlsaW5lXCIsXHJcbiAgICAgICAgICAgIE1vdmllWWVhciA9IFwiTW92aWVZZWFyXCIsXHJcbiAgICAgICAgICAgIE1vdmllUmVsZWFzZURhdGUgPSBcIk1vdmllUmVsZWFzZURhdGVcIixcclxuICAgICAgICAgICAgTW92aWVSdW50aW1lID0gXCJNb3ZpZVJ1bnRpbWVcIixcclxuICAgICAgICAgICAgTW92aWVLaW5kID0gXCJNb3ZpZUtpbmRcIixcclxuICAgICAgICAgICAgR2VucmVOYW1lID0gXCJHZW5yZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE1vdmllR2VucmVzU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTW92aWVEQi9Nb3ZpZUdlbnJlcyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxNb3ZpZUdlbnJlc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PE1vdmllR2VucmVzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPE1vdmllR2VucmVzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPE1vdmllR2VucmVzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIk1vdmllREIvTW92aWVHZW5yZXMvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiTW92aWVEQi9Nb3ZpZUdlbnJlcy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJNb3ZpZURCL01vdmllR2VucmVzL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiTW92aWVEQi9Nb3ZpZUdlbnJlcy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJNb3ZpZURCL01vdmllR2VucmVzL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Nb3ZpZUdlbnJlc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIE1vdmllTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVxdWVzdCB7XHJcbiAgICAgICAgR2VucmVzPzogbnVtYmVyW107XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNb3ZpZVJvdyB7XHJcbiAgICAgICAgTW92aWVJZD86IG51bWJlcjtcclxuICAgICAgICBUaXRsZT86IHN0cmluZztcclxuICAgICAgICBEZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgICAgICBTdG9yeWxpbmU/OiBzdHJpbmc7XHJcbiAgICAgICAgWWVhcj86IG51bWJlcjtcclxuICAgICAgICBSZWxlYXNlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBSdW50aW1lPzogbnVtYmVyO1xyXG4gICAgICAgIEtpbmQ/OiBNb3ZpZUtpbmQ7XHJcbiAgICAgICAgR2VucmVMaXN0PzogbnVtYmVyW107XHJcbiAgICAgICAgQ2FzdExpc3Q/OiBNb3ZpZUNhc3RSb3dbXTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE1vdmllUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdNb3ZpZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1RpdGxlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ01vdmllREIuTW92aWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBNb3ZpZUlkID0gXCJNb3ZpZUlkXCIsXHJcbiAgICAgICAgICAgIFRpdGxlID0gXCJUaXRsZVwiLFxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgU3RvcnlsaW5lID0gXCJTdG9yeWxpbmVcIixcclxuICAgICAgICAgICAgWWVhciA9IFwiWWVhclwiLFxyXG4gICAgICAgICAgICBSZWxlYXNlRGF0ZSA9IFwiUmVsZWFzZURhdGVcIixcclxuICAgICAgICAgICAgUnVudGltZSA9IFwiUnVudGltZVwiLFxyXG4gICAgICAgICAgICBLaW5kID0gXCJLaW5kXCIsXHJcbiAgICAgICAgICAgIEdlbnJlTGlzdCA9IFwiR2VucmVMaXN0XCIsXHJcbiAgICAgICAgICAgIENhc3RMaXN0ID0gXCJDYXN0TGlzdFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTW92aWVTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdNb3ZpZURCL01vdmllJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PE1vdmllUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TW92aWVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8TW92aWVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBNb3ZpZUxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxNb3ZpZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJNb3ZpZURCL01vdmllL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIk1vdmllREIvTW92aWUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTW92aWVEQi9Nb3ZpZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk1vdmllREIvTW92aWUvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiTW92aWVEQi9Nb3ZpZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+TW92aWVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuICAgIGV4cG9ydCBjbGFzcyBQZXJzb25Db2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdNb3ZpZURCLlBlcnNvbic7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBlcnNvbkZvcm0ge1xyXG4gICAgICAgIEZpcnN0TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIExhc3RuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQmlydGhkYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIEJpcnRoUGxhY2U6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBHZW5kZXI6IFNlcmVuaXR5LkVudW1FZGl0b3I7XHJcbiAgICAgICAgSGVpZ2h0OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBQZXJzb25Gb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNb3ZpZURCLlBlcnNvbic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUGVyc29uRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUGVyc29uRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkVudW1FZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkludGVnZXJFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUGVyc29uRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdGaXJzdE5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGFzdG5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQmlydGhkYXRlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JpcnRoUGxhY2UnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnR2VuZGVyJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hlaWdodCcsIHczXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgY2xhc3MgUGVyc29uTW92aWVDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdNb3ZpZURCLlBlcnNvbk1vdmllJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBlcnNvblJvdyB7XHJcbiAgICAgICAgUGVyc29uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgRmlyc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIExhc3RuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEZ1bGxuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEJpcnRoZGF0ZT86IHN0cmluZztcclxuICAgICAgICBCaXJ0aFBsYWNlPzogc3RyaW5nO1xyXG4gICAgICAgIEdlbmRlcj86IEdlbmRlcjtcclxuICAgICAgICBIZWlnaHQ/OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQZXJzb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1BlcnNvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0Z1bGxuYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ01vdmllREIuUGVyc29uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ01vdmllREIuUGVyc29uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxQZXJzb25Sb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFBlcnNvblJvdz4oJ01vdmllREIuUGVyc29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBQZXJzb25JZCA9IFwiUGVyc29uSWRcIixcclxuICAgICAgICAgICAgRmlyc3ROYW1lID0gXCJGaXJzdE5hbWVcIixcclxuICAgICAgICAgICAgTGFzdG5hbWUgPSBcIkxhc3RuYW1lXCIsXHJcbiAgICAgICAgICAgIEZ1bGxuYW1lID0gXCJGdWxsbmFtZVwiLFxyXG4gICAgICAgICAgICBCaXJ0aGRhdGUgPSBcIkJpcnRoZGF0ZVwiLFxyXG4gICAgICAgICAgICBCaXJ0aFBsYWNlID0gXCJCaXJ0aFBsYWNlXCIsXHJcbiAgICAgICAgICAgIEdlbmRlciA9IFwiR2VuZGVyXCIsXHJcbiAgICAgICAgICAgIEhlaWdodCA9IFwiSGVpZ2h0XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQZXJzb25TZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdNb3ZpZURCL1BlcnNvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxQZXJzb25Sb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxQZXJzb25Sb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8UGVyc29uUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFBlcnNvblJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJNb3ZpZURCL1BlcnNvbi9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJNb3ZpZURCL1BlcnNvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJNb3ZpZURCL1BlcnNvbi9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk1vdmllREIvUGVyc29uL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIk1vdmllREIvUGVyc29uL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5QZXJzb25TZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwge1xyXG4gICAgZXhwb3J0IGVudW0gTW92aWVLaW5kIHtcclxuICAgICAgICBGaWxtID0gMSxcclxuICAgICAgICBUdlNlcmllcyA9IDIsXHJcbiAgICAgICAgTWluaVNlcmllcyA9IDNcclxuICAgIH1cclxuICAgIFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFbnVtVHlwZShNb3ZpZUtpbmQsICdNb3ZpZVR1dG9yaWFsLk1vdmllS2luZCcsICdNb3ZpZURCLk1vdmllS2luZCcpO1xyXG59XHJcbiIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNjcmlwdFVzZXJEZWZpbml0aW9uIHtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBJc0FkbWluPzogYm9vbGVhbjtcclxuICAgICAgICBQZXJtaXNzaW9ucz86IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuVGV4dHMge1xyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIERiIHtcclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBMYW5ndWFnZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSb2xlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb25LZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlUGVybWlzc2lvbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZVJvbGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBUcmFuc2xhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tVGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVudGl0eVBsdXJhbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEtleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE92ZXJyaWRlQ29uZmlybWF0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZUNoYW5nZXNCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2VMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZVRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXJnZXRMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldFRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXIge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXNBY3RpdmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0RGlyZWN0b3J5VXBkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZENvbmZpcm06IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZEhhc2g6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZFNhbHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlckltYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHcmFudGVkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbktleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyUGVybWlzc2lvbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXJSb2xlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBNb3ZpZURCIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBHZW5yZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR2VucmVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIE1vdmllIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXN0TGlzdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR2VucmVMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgS2luZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZWxlYXNlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJ1bnRpbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdG9yeWxpbmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFllYXI6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIE1vdmllQ2FzdCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2hhcmFjdGVyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVDYXN0SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZURlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllS2luZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllUmVsZWFzZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZVJ1bnRpbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZVN0b3J5bGluZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZVllYXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25CaXJ0aFBsYWNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVyc29uQmlydGhkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVyc29uRmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVyc29uRnVsbG5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25HZW5kZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25IZWlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcnNvbkxhc3RuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBNb3ZpZUdlbnJlcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR2VucmVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdlbnJlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZUdlbnJlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVLaW5kOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVSZWxlYXNlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllUnVudGltZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllU3RvcnlsaW5lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllWWVhcjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUGVyc29uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCaXJ0aFBsYWNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmlydGhkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRnVsbG5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHZW5kZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBIZWlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0bmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcnNvbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgRm9ybXMge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQ2hhbmdlUGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEZvcmdvdFBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1JbmZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgTG9naW4ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZhY2Vib29rQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9yZ290UGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHb29nbGVCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMb2dpblRvWW91ckFjY291bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPUjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlbWVtYmVyTWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaWduSW5CdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaWduVXBCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJlc2V0UGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWxTdWJqZWN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgU2lnblVwIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY2NlcHRUZXJtczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjdGl2YXRlRW1haWxTdWJqZWN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWN0aXZhdGlvbkNvbXBsZXRlTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybUVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1JbmZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgTmF2aWdhdGlvbiB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IExvZ291dExpbms6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgU2l0ZVRpdGxlOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgU2l0ZSB7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBBY2Nlc3NEZW5pZWQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2xpY2tUb0NoYW5nZVVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTGFja1Blcm1pc3Npb25zOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOb3RMb2dnZWRJbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGFnZVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQmFzaWNQcm9ncmVzc0RpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYW5jZWxUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGxlYXNlV2FpdDogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEJ1bGtTZXJ2aWNlQWN0aW9uIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFsbEhhZEVycm9yc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQWxsU3VjY2Vzc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybWF0aW9uRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFcnJvckNvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOb3RoaW5nVG9Qcm9jZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb21lSGFkRXJyb3JzRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzQ291bnQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBEYXNoYm9hcmQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ29udGVudERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgTGF5b3V0IHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlckNvcHlyaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVySW5mbzogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVyUmlnaHRzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHZW5lcmFsU2V0dGluZ3M6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFjazogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFja0xpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsdWU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmx1ZUxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUdyZWVuOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUdyZWVuTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUHVycGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVB1cnBsZUxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVJlZDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVSZWRMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVZZWxsb3c6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lWWVsbG93TGlnaHQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvbkRpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBVc2VyRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRQZXJtaXNzaW9uc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdFJvbGVzQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25EaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdyYW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXZva2U6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlclJvbGVEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVmFsaWRhdGlvbkVycm9yIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFZhbGlkYXRpb24ge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBBdXRoZW50aWNhdGlvbkVycm9yOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IENhbnRGaW5kVXNlcldpdGhFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBDdXJyZW50UGFzc3dvcmRNaXNtYXRjaDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGVGb3JlaWduS2V5RXJyb3I6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgRW1haWxDb25maXJtOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsSW5Vc2U6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgSW52YWxpZEFjdGl2YXRlVG9rZW46IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgSW52YWxpZFJlc2V0VG9rZW46IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTYXZlUHJpbWFyeUtleUVycm9yOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgTW92aWVUdXRvcmlhbC5XZWJbJ1RleHRzJ10gPSBRLnByb3h5VGV4dHMoVGV4dHMsICcnLCB7RGI6e0FkbWluaXN0cmF0aW9uOntMYW5ndWFnZTp7SWQ6MSxMYW5ndWFnZUlkOjEsTGFuZ3VhZ2VOYW1lOjF9LFJvbGU6e1JvbGVJZDoxLFJvbGVOYW1lOjF9LFJvbGVQZXJtaXNzaW9uOntQZXJtaXNzaW9uS2V5OjEsUm9sZUlkOjEsUm9sZVBlcm1pc3Npb25JZDoxLFJvbGVSb2xlTmFtZToxfSxUcmFuc2xhdGlvbjp7Q3VzdG9tVGV4dDoxLEVudGl0eVBsdXJhbDoxLEtleToxLE92ZXJyaWRlQ29uZmlybWF0aW9uOjEsU2F2ZUNoYW5nZXNCdXR0b246MSxTb3VyY2VMYW5ndWFnZToxLFNvdXJjZVRleHQ6MSxUYXJnZXRMYW5ndWFnZToxLFRhcmdldFRleHQ6MX0sVXNlcjp7RGlzcGxheU5hbWU6MSxFbWFpbDoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxJc0FjdGl2ZToxLExhc3REaXJlY3RvcnlVcGRhdGU6MSxQYXNzd29yZDoxLFBhc3N3b3JkQ29uZmlybToxLFBhc3N3b3JkSGFzaDoxLFBhc3N3b3JkU2FsdDoxLFNvdXJjZToxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MSxVc2VySWQ6MSxVc2VySW1hZ2U6MSxVc2VybmFtZToxfSxVc2VyUGVybWlzc2lvbjp7R3JhbnRlZDoxLFBlcm1pc3Npb25LZXk6MSxVc2VyOjEsVXNlcklkOjEsVXNlclBlcm1pc3Npb25JZDoxLFVzZXJuYW1lOjF9LFVzZXJSb2xlOntSb2xlSWQ6MSxVc2VyOjEsVXNlcklkOjEsVXNlclJvbGVJZDoxLFVzZXJuYW1lOjF9fSxNb3ZpZURCOntHZW5yZTp7R2VucmVJZDoxLE5hbWU6MX0sTW92aWU6e0Nhc3RMaXN0OjEsRGVzY3JpcHRpb246MSxHZW5yZUxpc3Q6MSxLaW5kOjEsTW92aWVJZDoxLFJlbGVhc2VEYXRlOjEsUnVudGltZToxLFN0b3J5bGluZToxLFRpdGxlOjEsWWVhcjoxfSxNb3ZpZUNhc3Q6e0NoYXJhY3RlcjoxLE1vdmllQ2FzdElkOjEsTW92aWVEZXNjcmlwdGlvbjoxLE1vdmllSWQ6MSxNb3ZpZUtpbmQ6MSxNb3ZpZVJlbGVhc2VEYXRlOjEsTW92aWVSdW50aW1lOjEsTW92aWVTdG9yeWxpbmU6MSxNb3ZpZVRpdGxlOjEsTW92aWVZZWFyOjEsUGVyc29uQmlydGhQbGFjZToxLFBlcnNvbkJpcnRoZGF0ZToxLFBlcnNvbkZpcnN0TmFtZToxLFBlcnNvbkZ1bGxuYW1lOjEsUGVyc29uR2VuZGVyOjEsUGVyc29uSGVpZ2h0OjEsUGVyc29uSWQ6MSxQZXJzb25MYXN0bmFtZToxfSxNb3ZpZUdlbnJlczp7R2VucmVJZDoxLEdlbnJlTmFtZToxLE1vdmllRGVzY3JpcHRpb246MSxNb3ZpZUdlbnJlSWQ6MSxNb3ZpZUlkOjEsTW92aWVLaW5kOjEsTW92aWVSZWxlYXNlRGF0ZToxLE1vdmllUnVudGltZToxLE1vdmllU3RvcnlsaW5lOjEsTW92aWVUaXRsZToxLE1vdmllWWVhcjoxfSxQZXJzb246e0JpcnRoUGxhY2U6MSxCaXJ0aGRhdGU6MSxGaXJzdE5hbWU6MSxGdWxsbmFtZToxLEdlbmRlcjoxLEhlaWdodDoxLExhc3RuYW1lOjEsUGVyc29uSWQ6MX19fSxGb3Jtczp7TWVtYmVyc2hpcDp7Q2hhbmdlUGFzc3dvcmQ6e0Zvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sRm9yZ290UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LExvZ2luOntGYWNlYm9va0J1dHRvbjoxLEZvcmdvdFBhc3N3b3JkOjEsR29vZ2xlQnV0dG9uOjEsTG9naW5Ub1lvdXJBY2NvdW50OjEsT1I6MSxSZW1lbWJlck1lOjEsU2lnbkluQnV0dG9uOjEsU2lnblVwQnV0dG9uOjF9LFJlc2V0UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRW1haWxTdWJqZWN0OjEsRm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxTaWduVXA6e0FjY2VwdFRlcm1zOjEsQWN0aXZhdGVFbWFpbFN1YmplY3Q6MSxBY3RpdmF0aW9uQ29tcGxldGVNZXNzYWdlOjEsQmFja1RvTG9naW46MSxDb25maXJtRW1haWw6MSxDb25maXJtUGFzc3dvcmQ6MSxEaXNwbGF5TmFtZToxLEVtYWlsOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxQYXNzd29yZDoxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX19fSxOYXZpZ2F0aW9uOntMb2dvdXRMaW5rOjEsU2l0ZVRpdGxlOjF9LFNpdGU6e0FjY2Vzc0RlbmllZDp7Q2xpY2tUb0NoYW5nZVVzZXI6MSxDbGlja1RvTG9naW46MSxMYWNrUGVybWlzc2lvbnM6MSxOb3RMb2dnZWRJbjoxLFBhZ2VUaXRsZToxfSxCYXNpY1Byb2dyZXNzRGlhbG9nOntDYW5jZWxUaXRsZToxLFBsZWFzZVdhaXQ6MX0sQnVsa1NlcnZpY2VBY3Rpb246e0FsbEhhZEVycm9yc0Zvcm1hdDoxLEFsbFN1Y2Nlc3NGb3JtYXQ6MSxDb25maXJtYXRpb25Gb3JtYXQ6MSxFcnJvckNvdW50OjEsTm90aGluZ1RvUHJvY2VzczoxLFNvbWVIYWRFcnJvcnNGb3JtYXQ6MSxTdWNjZXNzQ291bnQ6MX0sRGFzaGJvYXJkOntDb250ZW50RGVzY3JpcHRpb246MX0sTGF5b3V0OntGb290ZXJDb3B5cmlnaHQ6MSxGb290ZXJJbmZvOjEsRm9vdGVyUmlnaHRzOjEsR2VuZXJhbFNldHRpbmdzOjEsTGFuZ3VhZ2U6MSxUaGVtZToxLFRoZW1lQmxhY2s6MSxUaGVtZUJsYWNrTGlnaHQ6MSxUaGVtZUJsdWU6MSxUaGVtZUJsdWVMaWdodDoxLFRoZW1lR3JlZW46MSxUaGVtZUdyZWVuTGlnaHQ6MSxUaGVtZVB1cnBsZToxLFRoZW1lUHVycGxlTGlnaHQ6MSxUaGVtZVJlZDoxLFRoZW1lUmVkTGlnaHQ6MSxUaGVtZVllbGxvdzoxLFRoZW1lWWVsbG93TGlnaHQ6MX0sUm9sZVBlcm1pc3Npb25EaWFsb2c6e0RpYWxvZ1RpdGxlOjEsRWRpdEJ1dHRvbjoxLFNhdmVTdWNjZXNzOjF9LFVzZXJEaWFsb2c6e0VkaXRQZXJtaXNzaW9uc0J1dHRvbjoxLEVkaXRSb2xlc0J1dHRvbjoxfSxVc2VyUGVybWlzc2lvbkRpYWxvZzp7RGlhbG9nVGl0bGU6MSxHcmFudDoxLFBlcm1pc3Npb246MSxSZXZva2U6MSxTYXZlU3VjY2VzczoxfSxVc2VyUm9sZURpYWxvZzp7RGlhbG9nVGl0bGU6MSxTYXZlU3VjY2VzczoxfSxWYWxpZGF0aW9uRXJyb3I6e1RpdGxlOjF9fSxWYWxpZGF0aW9uOntBdXRoZW50aWNhdGlvbkVycm9yOjEsQ2FudEZpbmRVc2VyV2l0aEVtYWlsOjEsQ3VycmVudFBhc3N3b3JkTWlzbWF0Y2g6MSxEZWxldGVGb3JlaWduS2V5RXJyb3I6MSxFbWFpbENvbmZpcm06MSxFbWFpbEluVXNlOjEsSW52YWxpZEFjdGl2YXRlVG9rZW46MSxJbnZhbGlkUmVzZXRUb2tlbjoxLE1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGg6MSxTYXZlUHJpbWFyeUtleUVycm9yOjF9fSk7XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxMYW5ndWFnZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBMYW5ndWFnZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBMYW5ndWFnZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBMYW5ndWFnZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8TGFuZ3VhZ2VSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBMYW5ndWFnZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIExhbmd1YWdlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtMYW5ndWFnZVJvdy5GaWVsZHMuTGFuZ3VhZ2VOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Um9sZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSb2xlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUm9sZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJvbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUm9sZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUb29sYmFyQnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IHN1cGVyLmdldFRvb2xiYXJCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5FZGl0QnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcGVybWlzc2lvbnMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS1sb2NrIHRleHQtZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUm9sZVBlcm1pc3Npb25EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlSUQ6IHRoaXMuZW50aXR5LlJvbGVJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZW50aXR5LlJvbGVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbihcImVkaXQtcGVybWlzc2lvbnMtYnV0dG9uXCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxSb2xlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uUm9sZVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBSb2xlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUm9sZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJvbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1JvbGVSb3cuRmllbGRzLlJvbGVOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVQZXJtaXNzaW9uRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogUm9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFBlcm1pc3Npb25DaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1Blcm1pc3Npb25zJyksIHtcclxuICAgICAgICAgICAgICAgIHNob3dSZXZva2U6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25TZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgUm9sZUlEOiB0aGlzLm9wdGlvbnMucm9sZUlELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcy5tYXAoeCA9PiAoPFVzZXJQZXJtaXNzaW9uUm93PnsgUGVybWlzc2lvbktleTogeCB9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5pbXBsaWNpdFBlcm1pc3Npb25zID0gUS5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5JbXBsaWNpdFBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpOiBKUXVlcnlVSS5EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlSUQ6IHRoaXMub3B0aW9ucy5yb2xlSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9uczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZS5tYXAoeCA9PiB4LlBlcm1pc3Npb25LZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuU2F2ZVN1Y2Nlc3MnKSksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlJvbGVQZXJtaXNzaW9uRGlhbG9nLkRpYWxvZ1RpdGxlJyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxkaXYgaWQ9XCJ+X1Blcm1pc3Npb25zXCI+PC9kaXY+JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICB0aXRsZT86IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVHJhbnNsYXRpb25HcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxUcmFuc2xhdGlvbkl0ZW0sIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJLZXlcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFRyYW5zbGF0aW9uU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFzQ2hhbmdlczogYm9vbGVhbjtcclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIHNvdXJjZUxhbmd1YWdlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7IFxyXG4gICAgICAgIHByaXZhdGUgdGFyZ2V0TGFuZ3VhZ2U6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBwcml2YXRlIHRhcmdldExhbmd1YWdlS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oJ2tleXVwLicgKyB0aGlzLnVuaXF1ZU5hbWUgKyAnIGNoYW5nZS4nICsgdGhpcy51bmlxdWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgJ2lucHV0LmN1c3RvbS10ZXh0JywgZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBRLnRyaW1Ub051bGwoJChlLnRhcmdldCkudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5nZXRJdGVtQnlJZCgkKGUudGFyZ2V0KS5kYXRhKCdrZXknKSkuQ3VzdG9tVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgbGV0IGRvbmU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3NvdXJjZS10ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlNvdXJjZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uU291cmNlVGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCd0YXJnZXQtdGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlRhcmdldFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uVGFyZ2V0VGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW107XHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7IGZpZWxkOiAnS2V5Jywgd2lkdGg6IDMwMCwgc29ydGFibGU6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnU291cmNlVGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzb3VyY2UtdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGN0eC52YWx1ZSB8fCAnJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ0N1c3RvbVRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IFEub3V0ZXJIdG1sKCQoJzxpbnB1dC8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2N1c3RvbS10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBjdHgudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAndGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEta2V5JywgY3R4Lml0ZW0uS2V5KSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdUYXJnZXRUZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3RhcmdldC10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChjdHgudmFsdWUgfHwgJycpKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG9wdDogU2VyZW5pdHkuTG9va3VwRWRpdG9yT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGxvb2t1cEtleTogJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZSA9IFNlcmVuaXR5LldpZGdldC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWwgPT4gZWwuYXBwZW5kVG8odGhpcy50b29sYmFyLmVsZW1lbnQpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJy0tLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlNvdXJjZUxhbmd1YWdlJykgKyAnIC0tLScpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlID0gU2VyZW5pdHkuV2lkZ2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3IsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbCA9PiBlbC5hcHBlbmRUbyh0aGlzLnRvb2xiYXIuZWxlbWVudCkuYXR0cigncGxhY2Vob2xkZXInLCAnLS0tICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uVGFyZ2V0TGFuZ3VhZ2UnKSArICcgLS0tJyksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlQ2hhbmdlcyhsYW5ndWFnZTogc3RyaW5nKTogUHJvbWlzZUxpa2U8YW55PiB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uc1tpdGVtLktleV0gPSBpdGVtLkN1c3RvbVRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoVHJhbnNsYXRpb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBUYXJnZXRMYW5ndWFnZUlEOiBsYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIFRyYW5zbGF0aW9uczogdHJhbnNsYXRpb25zXHJcbiAgICAgICAgICAgIH0pKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSBRLnRyaW1Ub051bGwobGFuZ3VhZ2UpIHx8ICdpbnZhcmlhbnQnO1xyXG4gICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKCdVc2VyIHRyYW5zbGF0aW9ucyBpbiBcIicgKyBsYW5ndWFnZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJ1wiIGxhbmd1YWdlIGFyZSBzYXZlZCB0byBcInVzZXIudGV4dHMuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgKyAnLmpzb25cIiAnICsgJ2ZpbGUgdW5kZXIgXCJ+L0FwcF9EYXRhL3RleHRzL1wiJywgJycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy52aWV3LnBhcmFtcztcclxuICAgICAgICAgICAgcmVxdWVzdC5Tb3VyY2VMYW5ndWFnZUlEID0gdGhpcy5zb3VyY2VMYW5ndWFnZS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZUtleSA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2UudmFsdWUgfHwgJyc7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuVGFyZ2V0TGFuZ3VhZ2VJRCA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIub25WaWV3U3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKTogU2VyZW5pdHkuVG9vbEJ1dHRvbltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5TYXZlQ2hhbmdlc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogZSA9PiB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhcHBseS1jaGFuZ2VzLWJ1dHRvbidcclxuICAgICAgICAgICAgfV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlUXVpY2tTZWFyY2hJbnB1dCgpIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAoZmllbGQsIHNlYXJjaFRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogVHJhbnNsYXRpb25JdGVtKSB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNkID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcztcclxuICAgICAgICAgICAgdmFyIHNlYXJjaGluZyA9IHNkKHRoaXMuc2VhcmNoVGV4dCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1hdGNoKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0cilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoaW5nKSA+PSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUS5pc0VtcHR5T3JOdWxsKHNlYXJjaGluZykgfHwgbWF0Y2goaXRlbS5LZXkpIHx8IG1hdGNoKGl0ZW0uU291cmNlVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoKGl0ZW0uVGFyZ2V0VGV4dCkgfHwgbWF0Y2goaXRlbS5DdXN0b21UZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1c2VQYWdlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxVc2VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFVzZXJGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJc0FjdGl2ZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pc0FjdGl2ZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVzZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBVc2VyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFVzZXJGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZS5sZW5ndGggPCA3KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNyBjaGFyYWN0ZXJzIVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0uYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUgIT0gdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJUaGUgcGFzc3dvcmRzIGVudGVyZWQgZG9lc24ndCBtYXRjaCFcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5nZXRUb29sYmFyQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0Um9sZXNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1yb2xlcy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLXVzZXJzIHRleHQtYmx1ZScsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUm9sZURpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJRDogdGhpcy5lbnRpdHkuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5lbnRpdHkuVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0UGVybWlzc2lvbnNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1wZXJtaXNzaW9ucy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLWxvY2sgdGV4dC1ncmVlbicsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUGVybWlzc2lvbkRpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJRDogdGhpcy5lbnRpdHkuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5lbnRpdHkuVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlSW50ZXJmYWNlKCkge1xyXG4gICAgICAgICAgICBzdXBlci51cGRhdGVJbnRlcmZhY2UoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKCdlZGl0LXJvbGVzLWJ1dHRvbicpLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKFwiZWRpdC1wZXJtaXNzaW9ucy1idXR0b25cIikudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLCB0aGlzLmlzTmV3T3JEZWxldGVkKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGFmdGVyTG9hZEVudGl0eSgpIHtcclxuICAgICAgICAgICAgc3VwZXIuYWZ0ZXJMb2FkRW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGVzZSBmaWVsZHMgYXJlIG9ubHkgcmVxdWlyZWQgaW4gbmV3IHJlY29yZCBtb2RlXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZC5lbGVtZW50LnRvZ2dsZUNsYXNzKCdyZXF1aXJlZCcsIHRoaXMuaXNOZXcoKSlcclxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCdzdXAnKS50b2dnbGUodGhpcy5pc05ldygpKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS5lbGVtZW50LnRvZ2dsZUNsYXNzKCdyZXF1aXJlZCcsIHRoaXMuaXNOZXcoKSlcclxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCdzdXAnKS50b2dnbGUodGhpcy5pc05ldygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxVc2VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uVXNlclwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBVc2VyRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SXNBY3RpdmVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaXNBY3RpdmVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBVc2VyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVXNlclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbVXNlclJvdy5GaWVsZHMuVXNlcm5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5BdXRob3JpemF0aW9uIHtcclxuICAgIGV4cG9ydCBkZWNsYXJlIGxldCB1c2VyRGVmaW5pdGlvbjogU2NyaXB0VXNlckRlZmluaXRpb247XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1dGhvcml6YXRpb24sICd1c2VyRGVmaW5pdGlvbicsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0UmVtb3RlRGF0YSgnVXNlckRhdGEnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbktleSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcihbU2VyZW5pdHkuSUdldEVkaXRWYWx1ZSwgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZV0pXHJcbiAgICBleHBvcnQgY2xhc3MgUGVybWlzc2lvbkNoZWNrRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuRGF0YUdyaWQ8UGVybWlzc2lvbkNoZWNrSXRlbSwgUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFwiS2V5XCI7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgcHJpdmF0ZSBieVBhcmVudEtleTogUS5Hcm91cGluZzxQZXJtaXNzaW9uQ2hlY2tJdGVtPjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdDogUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGl0bGVCeUtleTogUS5EaWN0aW9uYXJ5PHN0cmluZz4gPSB7fTtcclxuICAgICAgICAgICAgbGV0IHBlcm1pc3Npb25LZXlzID0gdGhpcy5nZXRTb3J0ZWRHcm91cEFuZFBlcm1pc3Npb25LZXlzKHRpdGxlQnlLZXkpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBwZXJtaXNzaW9uS2V5cy5tYXAoa2V5ID0+IDxQZXJtaXNzaW9uQ2hlY2tJdGVtPntcclxuICAgICAgICAgICAgICAgIEtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgUGFyZW50S2V5OiB0aGlzLmdldFBhcmVudEtleShrZXkpLFxyXG4gICAgICAgICAgICAgICAgVGl0bGU6IHRpdGxlQnlLZXlba2V5XSxcclxuICAgICAgICAgICAgICAgIEdyYW50UmV2b2tlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgSXNHcm91cDoga2V5LmNoYXJBdChrZXkubGVuZ3RoIC0gMSkgPT09ICc6J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlQYXJlbnRLZXkgPSBRLnRvR3JvdXBpbmcoaXRlbXMsIHggPT4geC5QYXJlbnRLZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSwgZ3JhbnQ6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoaXRlbS5HcmFudFJldm9rZSA9PT0gZ3JhbnQpID8gJyBjaGVja2VkJyA6ICcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGRlc2MgPSB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgICAgICBsZXQgZ3JhbnRlZCA9IGRlc2MuZmlsdGVyKHggPT4geC5HcmFudFJldm9rZSA9PT0gZ3JhbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFncmFudGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGVzYy5sZW5ndGggPT09IGdyYW50ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2NoZWNrZWQnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJ2NoZWNrZWQgcGFydGlhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHJvbGVPckltcGxpY2l0KGtleSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcm9sZVBlcm1pc3Npb25zW2tleV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2YgT2JqZWN0LmtleXModGhpcy5fcm9sZVBlcm1pc3Npb25zKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQgJiYgZFtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpIG9mIE9iamVjdC5rZXlzKHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0uR3JhbnRSZXZva2UgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZCAmJiBkW2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEl0ZW1FZmZlY3RpdmVDbGFzcyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZXNjID0gdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGxldCBncmFudENvdW50ID0gUS5jb3VudChkZXNjLCB4ID0+IHguR3JhbnRSZXZva2UgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAoeC5HcmFudFJldm9rZSA9PSBudWxsICYmIHRoaXMucm9sZU9ySW1wbGljaXQoeC5LZXkpKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdyYW50Q291bnQgPT09IGRlc2MubGVuZ3RoIHx8IGRlc2MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhbGxvdyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdyYW50Q291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2RlbnknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAncGFydGlhbCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBncmFudGVkID0gaXRlbS5HcmFudFJldm9rZSA9PT0gdHJ1ZSB8fFxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uR3JhbnRSZXZva2UgPT0gbnVsbCAmJiB0aGlzLnJvbGVPckltcGxpY2l0KGl0ZW0uS2V5KSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKGdyYW50ZWQgPyAnIGFsbG93JyA6ICcgZGVueScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1uczogU2xpY2suQ29sdW1uW10gPSBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlBlcm1pc3Npb24nKSxcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnVGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBTZXJlbml0eS5TbGlja0Zvcm1hdHRpbmcudHJlZVRvZ2dsZSgoKSA9PiB0aGlzLnZpZXcsIHggPT4geC5LZXksIGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3MgPSB0aGlzLmdldEl0ZW1FZmZlY3RpdmVDbGFzcyhpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiZWZmZWN0aXZlLXBlcm1pc3Npb24gJyArIGtsYXNzICsgJ1wiPicgKyBRLmh0bWxFbmNvZGUoY3R4LnZhbHVlKSArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ5NSxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuR3JhbnQnKSwgZmllbGQ6ICdHcmFudCcsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzMSA9IHRoaXMuZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxzcGFuIGNsYXNzPSdjaGVjay1ib3ggZ3JhbnQgbm8tZmxvYXQgXCIgKyBrbGFzczEgKyBcIic+PC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NSxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGhlYWRlckNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJ1xyXG4gICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1Jldm9rZSkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuUmV2b2tlJyksIGZpZWxkOiAnUmV2b2tlJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMiA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3MyID0gdGhpcy5nZXRJdGVtR3JhbnRSZXZva2VDbGFzcyhpdGVtMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiY2hlY2stYm94IHJldm9rZSBuby1mbG9hdCAnICsga2xhc3MyICsgJ1wiPjwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJDc3NDbGFzczogJ2FsaWduLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0SXRlbXMoaXRlbXM6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSk6IHZvaWQge1xyXG4gICAgICAgICAgICBTZXJlbml0eS5TbGlja1RyZWVIZWxwZXIuc2V0SW5kZW50cyhpdGVtcywgeCA9PiB4LktleSwgeCA9PiB4LlBhcmVudEtleSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoaXRlbXMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld1N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld0ZpbHRlcihpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLmZpbHRlckJ5SWQoaXRlbSwgdGhpcy52aWV3LCB4ID0+IHguUGFyZW50S2V5KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFRleHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoQ29udGFpbnMoaXRlbSkgfHwgaXRlbS5Jc0dyb3VwICYmIFEuYW55KHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgZmFsc2UpLCB4ID0+IHRoaXMubWF0Y2hDb250YWlucyh4KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtYXRjaENvbnRhaW5zKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoaXRlbS5UaXRsZSB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dCkgPj0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0RGVzY2VuZGFudHMoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSwgZXhjbHVkZUdyb3VwczogYm9vbGVhbik6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgc3RhY2sgPSBbaXRlbV07XHJcbiAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5ieVBhcmVudEtleVtpLktleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGNsdWRlR3JvdXBzIHx8ICFjaGlsZC5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZSwgcm93LCBjZWxsKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLnRvZ2dsZUNsaWNrKGUsIHJvdywgY2VsbCwgdGhpcy52aWV3LCB4ID0+IHguS2V5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICBsZXQgZ3JhbnQgPSB0YXJnZXQuaGFzQ2xhc3MoJ2dyYW50Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ3JhbnQgfHwgdGFyZ2V0Lmhhc0NsYXNzKCdyZXZva2UnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja2VkT3JQYXJ0aWFsID0gdGFyZ2V0Lmhhc0NsYXNzKCdjaGVja2VkJykgfHwgdGFyZ2V0Lmhhc0NsYXNzKCdwYXJ0aWFsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRPclBhcnRpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFudCA9IGdyYW50ICE9PSBjaGVja2VkT3JQYXJ0aWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkIG9mIHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5HcmFudFJldm9rZSA9IGdyYW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkdyYW50UmV2b2tlID0gZ3JhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlja0dyaWQuaW52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFBhcmVudEtleShrZXkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBpZiAoa2V5LmNoYXJBdChrZXkubGVuZ3RoIC0gMSkgPT09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LnN1YnN0cigwLCBrZXkubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpZHggPSBrZXkubGFzdEluZGV4T2YoJzonKTtcclxuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5LnN1YnN0cigwLCBpZHggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCk6IFNlcmVuaXR5LlRvb2xCdXR0b25bXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsIChmaWVsZCwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLnRyaW1Ub051bGwodGV4dCkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXModGhpcy52aWV3LmdldEl0ZW1zKCksIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0U29ydGVkR3JvdXBBbmRQZXJtaXNzaW9uS2V5cyh0aXRsZUJ5S2V5OiBRLkRpY3Rpb25hcnk8c3RyaW5nPik6IHN0cmluZ1tdIHtcclxuICAgICAgICAgICAgbGV0IGtleXMgPSA8c3RyaW5nW10+US5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5QZXJtaXNzaW9uS2V5cycpO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGVXaXRoR3JvdXAgPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgayBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcyA9IGs7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHMuY2hhckF0KHMubGVuZ3RoIC0gMSkgPT0gJzonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcyA9IHMuc3Vic3RyKDAsIHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGVCeUtleVtzXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlQnlLZXlbc10gPSBRLmNvYWxlc2NlKFEudHJ5R2V0VGV4dCgnUGVybWlzc2lvbi4nICsgcyksIHMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gcy5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwID0gJyc7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdXBUaXRsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cCA9IGdyb3VwICsgcGFydHNbaV0gKyAnOic7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR4dCA9IFEudHJ5R2V0VGV4dCgnUGVybWlzc2lvbi4nICsgZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQgPSBwYXJ0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVCeUtleVtncm91cF0gPSB0eHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBUaXRsZSA9IGdyb3VwVGl0bGUgKyB0aXRsZUJ5S2V5W2dyb3VwXSArICc6JztcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZVdpdGhHcm91cFtncm91cF0gPSBncm91cFRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlV2l0aEdyb3VwW3NdID0gZ3JvdXBUaXRsZSArIHRpdGxlQnlLZXlbc107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh0aXRsZUJ5S2V5KTtcclxuICAgICAgICAgICAga2V5cyA9IGtleXMuc29ydCgoeCwgeSkgPT4gUS50dXJraXNoTG9jYWxlQ29tcGFyZSh0aXRsZVdpdGhHcm91cFt4XSwgdGl0bGVXaXRoR3JvdXBbeV0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IHZhbHVlKCk6IFVzZXJQZXJtaXNzaW9uUm93W10ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogVXNlclBlcm1pc3Npb25Sb3dbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZXcuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uR3JhbnRSZXZva2UgIT0gbnVsbCAmJiBpdGVtLktleS5jaGFyQXQoaXRlbS5LZXkubGVuZ3RoIC0gMSkgIT0gJzonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBQZXJtaXNzaW9uS2V5OiBpdGVtLktleSwgR3JhbnRlZDogaXRlbS5HcmFudFJldm9rZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCB2YWx1ZSh2YWx1ZTogVXNlclBlcm1pc3Npb25Sb3dbXSkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZXcuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5HcmFudFJldm9rZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChyb3cuUGVybWlzc2lvbktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgci5HcmFudFJldm9rZSA9IFEuY29hbGVzY2Uocm93LkdyYW50ZWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfcm9sZVBlcm1pc3Npb25zOiBRLkRpY3Rpb25hcnk8Ym9vbGVhbj4gPSB7fTtcclxuXHJcbiAgICAgICAgZ2V0IHJvbGVQZXJtaXNzaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yb2xlUGVybWlzc2lvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHJvbGVQZXJtaXNzaW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9sZVBlcm1pc3Npb25zID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb2xlUGVybWlzc2lvbnNba10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKHRoaXMuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9pbXBsaWNpdFBlcm1pc3Npb25zOiBRLkRpY3Rpb25hcnk8US5EaWN0aW9uYXJ5PGJvb2xlYW4+PiA9IHt9O1xyXG5cclxuICAgICAgICBzZXQgaW1wbGljaXRQZXJtaXNzaW9ucyh2YWx1ZTogUS5EaWN0aW9uYXJ5PHN0cmluZ1tdPikge1xyXG4gICAgICAgICAgICB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXSA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba10gfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSB2YWx1ZVtrXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzIG9mIGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdW3NdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uQ2hlY2tFZGl0b3JPcHRpb25zIHtcclxuICAgICAgICBzaG93UmV2b2tlPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25DaGVja0l0ZW0ge1xyXG4gICAgICAgIFBhcmVudEtleT86IHN0cmluZztcclxuICAgICAgICBLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgVGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNHcm91cD86IGJvb2xlYW47XHJcbiAgICAgICAgR3JhbnRSZXZva2U/OiBib29sZWFuO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUGVybWlzc2lvbkRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbkNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdQZXJtaXNzaW9ucycpLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93UmV2b2tlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuTGlzdFJvbGVQZXJtaXNzaW9ucyh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMucm9sZVBlcm1pc3Npb25zID0gcmVzcG9uc2UuRW50aXRpZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5pbXBsaWNpdFBlcm1pc3Npb25zID0gUS5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5JbXBsaWNpdFBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpOiBKUXVlcnlVSS5EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYnRuIGJ0bi1wcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVybWlzc2lvbnM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gUS5ub3RpZnlTdWNjZXNzKFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5TYXZlU3VjY2VzcycpKSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuRGlhbG9nVGl0bGUnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy51c2VybmFtZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGRpdiBpZD1cIn5fUGVybWlzc2lvbnNcIj48L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgdXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUNoZWNrRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuQ2hlY2tUcmVlRWRpdG9yPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55PiwgYW55PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkaXY6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihkaXYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCkge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsIChmaWVsZCwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyh0ZXh0IHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRyZWVJdGVtcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJvbGVSb3cuZ2V0TG9va3VwKCkuaXRlbXMubWFwKHJvbGUgPT4gPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55Pj57XHJcbiAgICAgICAgICAgICAgICBpZDogcm9sZS5Sb2xlSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJvbGUuUm9sZU5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSAmJlxyXG4gICAgICAgICAgICAgICAgKFEuaXNFbXB0eU9yTnVsbCh0aGlzLnNlYXJjaFRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhpdGVtLnRleHQgfHwgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hUZXh0KSA+PSAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJSb2xlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFVzZXJSb2xlRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBSb2xlQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogVXNlclJvbGVEaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFJvbGVDaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1JvbGVzJykpO1xyXG5cclxuICAgICAgICAgICAgVXNlclJvbGVTZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklEXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcy5tYXAoeCA9PiB4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKCkge1xyXG4gICAgICAgICAgICB2YXIgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLk9rQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2J0biBidG4tcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFEuc2VydmljZVJlcXVlc3QoJ0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VwZGF0ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb2xlczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZS5tYXAoeCA9PiBwYXJzZUludCh4LCAxMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuVXNlclJvbGVEaWFsb2cuU2F2ZVN1Y2Nlc3MnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuVXNlclJvbGVEaWFsb2cuRGlhbG9nVGl0bGUnKSwgdGhpcy5vcHRpb25zLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBpZD0nfl9Sb2xlcyc+PC9kaXY+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVEaWFsb2dPcHRpb25zIHtcclxuICAgICAgICB1c2VySUQ6IG51bWJlcjtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLkxhbmd1YWdlTGlzdCB7XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDogc3RyaW5nW11bXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGsgb2YgQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VSb3cuZ2V0TG9va3VwKCkuaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKGsuTGFuZ3VhZ2VJZCAhPT0gJ2VuJykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goW2suSWQudG9TdHJpbmcoKSwgay5MYW5ndWFnZU5hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb24vSGVscGVycy9MYW5ndWFnZUxpc3QudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLlNjcmlwdEluaXRpYWxpemF0aW9uIHtcclxuICAgIFEuQ29uZmlnLnJlc3BvbnNpdmVEaWFsb2dzID0gdHJ1ZTtcclxuICAgIFEuQ29uZmlnLnJvb3ROYW1lc3BhY2VzLnB1c2goJ01vdmllVHV0b3JpYWwuV2ViJyk7XHJcbiAgICBTZXJlbml0eS5FbnRpdHlEaWFsb2cuZGVmYXVsdExhbmd1YWdlTGlzdCA9IExhbmd1YWdlTGlzdC5nZXRWYWx1ZTtcclxuICAgIFNlcmVuaXR5Lkh0bWxDb250ZW50RWRpdG9yLkNLRWRpdG9yQmFzZVBhdGggPSBcIn4vU2VyZW5pdHkuQXNzZXRzL1NjcmlwdHMvY2tlZGl0b3IvXCI7XHJcblxyXG4gICAgaWYgKCQuZm5bJ2NvbG9yYm94J10pIHtcclxuICAgICAgICAkLmZuWydjb2xvcmJveCddLnNldHRpbmdzLm1heFdpZHRoID0gXCI5NSVcIjtcclxuICAgICAgICAkLmZuWydjb2xvcmJveCddLnNldHRpbmdzLm1heEhlaWdodCA9IFwiOTUlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9uZXJyb3IgPSBRLkVycm9ySGFuZGxpbmcucnVudGltZUVycm9ySGFuZGxlcjtcclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFNpZGViYXJTZWFyY2ggZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcbiAgICAgICAgcHJpdmF0ZSBtZW51VUw6IEpRdWVyeTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5wdXQ6IEpRdWVyeSwgbWVudVVMOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgbmV3IFNlcmVuaXR5LlF1aWNrU2VhcmNoSW5wdXQoaW5wdXQsIHtcclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoOiAoZmllbGQsIHRleHQsIHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hdGNoRmxhZ3ModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lbnVVTCA9IG1lbnVVTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVNYXRjaEZsYWdzKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgbGlMaXN0ID0gdGhpcy5tZW51VUwuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0ID0gUS50cmltVG9OdWxsKHRleHQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnNob3coKTtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gdGV4dC5yZXBsYWNlKCcsJywgJyAnKS5zcGxpdCgnICcpLmZpbHRlcih4ID0+ICFRLmlzVHJpbW1lZEVtcHR5KHgpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gUS50cmltVG9OdWxsKFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MocGFydHNbaV0pLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBsaUxpc3Q7XHJcbiAgICAgICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24gKGlkeCwgZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSAkKGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLmNvYWxlc2NlKHgudGV4dCgpLCAnJykudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIG9mIHBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAgIT0gbnVsbCAmJiAhKHRpdGxlLmluZGV4T2YocCkgIT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0l0ZW1zID0gaXRlbXMubm90KCcubm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlzaWJsZXMgPSBtYXRjaGluZ0l0ZW1zLnBhcmVudHMoJ2xpJykuYWRkKG1hdGNoaW5nSXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5vblZpc2libGVzID0gbGlMaXN0Lm5vdCh2aXNpYmxlcyk7XHJcbiAgICAgICAgICAgIG5vblZpc2libGVzLmhpZGUoKS5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2aXNpYmxlcy5zaG93KCk7XHJcbiAgICAgICAgICAgIGxpTGlzdC5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTG9naW5QYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8TG9naW5SZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBMb2dpbkZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdMb2dpbkJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvTG9naW4nKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG9SZXR1cm5VcmwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IChyZXNwb25zZTogU2VyZW5pdHkuU2VydmljZVJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IuQ29kZSA9PSBcIlJlZGlyZWN0VXNlclRvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2UuRXJyb3IuQXJndW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvciAhPSBudWxsICYmICFRLmlzRW1wdHlPck51bGwocmVzcG9uc2UuRXJyb3IuTWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5RXJyb3IocmVzcG9uc2UuRXJyb3IuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjUGFzc3dvcmQnKS5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5FcnJvckhhbmRsaW5nLnNob3dTZXJ2aWNlRXJyb3IocmVzcG9uc2UuRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCByZWRpcmVjdFRvUmV0dXJuVXJsKCkge1xyXG4gICAgICAgICAgICB2YXIgcSA9IFEucGFyc2VRdWVyeVN0cmluZygpO1xyXG4gICAgICAgICAgICB2YXIgcmV0dXJuVXJsID0gcVsncmV0dXJuVXJsJ10gfHwgcVsnUmV0dXJuVXJsJ107XHJcbiAgICAgICAgICAgIGlmIChyZXR1cm5VcmwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzaCAhPSBudWxsICYmIGhhc2ggIT0gJyMnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblVybCArPSBoYXNoO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXR1cm5Vcmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgPGgyIGNsYXNzPVwidGV4dC1jZW50ZXIgcC00XCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke1EucmVzb2x2ZVVybChcIn4vQ29udGVudC9zaXRlL2ltYWdlcy9zZXJlbml0eS1sb2dvLXctMTI4LnBuZ1wiKX1cIlxyXG4gICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtY2lyY2xlIHAtMVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcy1zaWRlYmFyLWJhbmQtYmcpXCJcclxuICAgICAgICAgICAgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgLz4gTW92aWVUdXRvcmlhbC5XZWJcclxuICAgIDwvaDI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInMtUGFuZWwgcC00XCI+XHJcbiAgICAgICAgPGg1IGNsYXNzPVwidGV4dC1jZW50ZXIgbXktNFwiPiR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5Mb2dpblRvWW91ckFjY291bnRcIil9PC9oNT5cclxuICAgICAgICA8Zm9ybSBpZD1cIn5fRm9ybVwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwifl9Qcm9wZXJ0eUdyaWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsb2F0LWVuZCB0ZXh0LWRlY29yYXRpb24tbm9uZVwiIGhyZWY9XCIke1EucmVzb2x2ZVVybCgnfi9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkJyl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLkZvcmdvdFBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwifl9Mb2dpbkJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBteS0zIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLlNpZ25JbkJ1dHRvblwiKX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwidGV4dC1kZWNvcmF0aW9uLW5vbmVcIiBocmVmPVwiJHtRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9TaWduVXAnKX1cIj4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uU2lnblVwQnV0dG9uXCIpfTwvYT5cclxuICAgIDwvZGl2PiAgIFxyXG5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxDaGFuZ2VQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENoYW5nZVBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogQ2hhbmdlUGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IENoYW5nZVBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5OZXdQYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS53KCdDb25maXJtUGFzc3dvcmQnLCBTZXJlbml0eS5QYXNzd29yZEVkaXRvcikudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdChRLnRleHQoJ1ZhbGlkYXRpb24uTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aCcpLCA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9DaGFuZ2VQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJzLVBhbmVsXCI+XHJcbiAgICA8aDMgY2xhc3M9XCJwYWdlLXRpdGxlIG1iLTQgdGV4dC1jZW50ZXJcIj4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmQuRm9ybVRpdGxlXCIpfTwvaDM+XHJcbiAgICA8Zm9ybSBpZD1cIn5fRm9ybVwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ+X1Byb3BlcnR5R3JpZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZCBtdC00XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ+X1N1Ym1pdEJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgJHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLlN1Ym1pdEJ1dHRvblwiKX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbjwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPEZvcmdvdFBhc3N3b3JkUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gRm9yZ290UGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBGb3Jnb3RQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9yZ290UGFzc3dvcmRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvRm9yZ290UGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8UmVzZXRQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFJlc2V0UGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBSZXNldFBhc3N3b3JkRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBSZXNldFBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5OZXdQYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5OZXdQYXNzd29yZC52YWx1ZS5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEuZm9ybWF0KFEudGV4dCgnVmFsaWRhdGlvbi5NaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoJyksIDcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LlRva2VuID0gdGhpcy5ieUlkKCdUb2tlbicpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9SZXNldFBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuUmVzZXRQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvTG9naW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgU2lnblVwUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPFNpZ25VcFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFNpZ25VcEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IFNpZ25VcEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgU2lnblVwRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtRW1haWwuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybUVtYWlsLnZhbHVlICE9PSB0aGlzLmZvcm0uRW1haWwudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLkVtYWlsQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvU2lnblVwJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNwbGF5TmFtZTogdGhpcy5mb3JtLkRpc3BsYXlOYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDogdGhpcy5mb3JtLkVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDogdGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuU2lnblVwLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBHZW5yZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxHZW5yZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBHZW5yZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gR2VucmVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBHZW5yZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gR2VucmVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBHZW5yZVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gR2VucmVSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gR2VucmVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gR2VucmVSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBHZW5yZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBHZW5yZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEdlbnJlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEdlbnJlQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBHZW5yZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gR2VucmVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gR2VucmVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBHZW5yZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEdlbnJlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckZvcm1hdHRlcigpXHJcbiAgICBleHBvcnQgY2xhc3MgR2VucmVMaXN0Rm9ybWF0dGVyIGltcGxlbWVudHMgU2xpY2suRm9ybWF0dGVyIHtcclxuICAgICAgICBmb3JtYXQoY3R4OiBTbGljay5Gb3JtYXR0ZXJDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIGxldCBpZExpc3QgPSBjdHgudmFsdWUgYXMgbnVtYmVyW107XHJcbiAgICAgICAgICAgIGlmICghaWRMaXN0IHx8ICFpZExpc3QubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgYnlJZCA9IEdlbnJlUm93LmdldExvb2t1cCgpLml0ZW1CeUlkO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGlkTGlzdC5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZyA9IGJ5SWRbeF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHgudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5odG1sRW5jb2RlKGcuTmFtZSk7XHJcbiAgICAgICAgICAgIH0pLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPE1vdmllUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIE1vdmllRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBNb3ZpZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1vdmllUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBNb3ZpZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIE1vdmllU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBNb3ZpZVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBNb3ZpZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBNb3ZpZVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IE1vdmllRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8TW92aWVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gTW92aWVDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIE1vdmllRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBNb3ZpZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBNb3ZpZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1vdmllUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTW92aWVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFF1aWNrU2VhcmNoRmllbGRzKCk6IFNlcmVuaXR5LlF1aWNrU2VhcmNoRmllbGRbXSB7XHJcbiAgICAgICAgICAgIGxldCB0eHQgPSAocykgPT5cclxuICAgICAgICAgICAgICAgIFEudGV4dChgRGIuJHtNb3ZpZVJvdy5sb2NhbFRleHRQcmVmaXh9LiR7c31gKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogXCJcIiwgdGl0bGU6IFwiYWxsXCIgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogTW92aWVSb3cuRmllbGRzLkRlc2NyaXB0aW9uLCB0aXRsZTogdHh0KE1vdmllUm93LkZpZWxkcy5EZXNjcmlwdGlvbikgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogTW92aWVSb3cuRmllbGRzLlN0b3J5bGluZSwgdGl0bGU6IHR4dChNb3ZpZVJvdy5GaWVsZHMuU3RvcnlsaW5lKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBNb3ZpZVJvdy5GaWVsZHMuWWVhciwgdGl0bGU6IHR4dChNb3ZpZVJvdy5GaWVsZHMuWWVhcikgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0UXVpY2tGaWx0ZXJzKCkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBzdXBlci5nZXRRdWlja0ZpbHRlcnMoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdlbnJlTGlzdEZpbHRlciA9IFEuZmlyc3QoaXRlbXMsIHggPT5cclxuICAgICAgICAgICAgICAgIHguZmllbGQgPT0gTW92aWVSb3cuRmllbGRzLkdlbnJlTGlzdCk7XHJcblxyXG4gICAgICAgICAgICBnZW5yZUxpc3RGaWx0ZXIuaGFuZGxlciA9IGggPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IChoLnJlcXVlc3QgYXMgTW92aWVMaXN0UmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSAoaC53aWRnZXQgYXMgU2VyZW5pdHkuTG9va3VwRWRpdG9yKS52YWx1ZXM7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LkdlbnJlcyA9IHZhbHVlcy5tYXAoeCA9PiBwYXJzZUludCh4LCAxMCkpO1xyXG4gICAgICAgICAgICAgICAgaC5oYW5kbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTW92aWVDYXN0RWRpdERpYWxvZyBleHRlbmRzXHJcbiAgICAgICAgU2VyZW5pdHkuRXh0ZW5zaW9ucy5HcmlkRWRpdG9yRGlhbG9nPE1vdmllQ2FzdFJvdz4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTW92aWVDYXN0Rm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTW92aWVDYXN0Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybTogTW92aWVDYXN0Rm9ybSA9IG5ldyBNb3ZpZUNhc3RGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZUNhc3RFZGl0b3JcclxuICAgICAgICBleHRlbmRzIFNlcmVuaXR5LkV4dGVuc2lvbnMuR3JpZEVkaXRvckJhc2U8TW92aWVDYXN0Um93PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIk1vdmllREIuTW92aWVDYXN0XCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIE1vdmllQ2FzdEVkaXREaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTW92aWVDYXN0Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICBcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEFkZEJ1dHRvbkNhcHRpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkFkZFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZhbGlkYXRlRW50aXR5KHJvdzogTW92aWVDYXN0Um93LCBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIudmFsaWRhdGVFbnRpdHkocm93LCBpZCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJvdy5QZXJzb25GdWxsbmFtZSA9IFBlcnNvblJvdy5nZXRMb29rdXAoKVxyXG4gICAgICAgICAgICAgICAgLml0ZW1CeUlkW3Jvdy5QZXJzb25JZF0uRnVsbG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIH0gICAiLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllR2VucmVzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPE1vdmllR2VucmVzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIE1vdmllR2VucmVzRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBNb3ZpZUdlbnJlc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1vdmllR2VucmVzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTW92aWVHZW5yZXNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE1vdmllR2VucmVzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE1vdmllR2VucmVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE1vdmllR2VucmVzUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgTW92aWVHZW5yZXNGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTW92aWVHZW5yZXNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxNb3ZpZUdlbnJlc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBNb3ZpZUdlbnJlc0NvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTW92aWVHZW5yZXNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE1vdmllR2VucmVzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE1vdmllR2VucmVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTW92aWVHZW5yZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBNb3ZpZUdlbnJlc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTW92aWVUdXRvcmlhbC5XZWIuTW92aWVEQiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZXNwb25zaXZlKClcclxuICAgIGV4cG9ydCBjbGFzcyBQZXJzb25EaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8UGVyc29uUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFBlcnNvbkZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUGVyc29uUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUGVyc29uUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBQZXJzb25Sb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQZXJzb25TZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFBlcnNvblJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQZXJzb25Sb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUGVyc29uUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUGVyc29uRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtb3ZpZXNHcmlkOiBQZXJzb25Nb3ZpZUdyaWQ7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tb3ZpZXNHcmlkID0gbmV3IFBlcnNvbk1vdmllR3JpZCh0aGlzLmJ5SWQoXCJNb3ZpZXNHcmlkXCIpKTtcclxuICAgICAgICAgICAgdGhpcy50YWJzLm9uKCd0YWJzYWN0aXZhdGUnLCAoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJhbmdlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBpZD1cIn5fVGFic1wiIGNsYXNzPVwicy1EaWFsb2dDb250ZW50XCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI35fVGFiSW5mb1wiPjxzcGFuPlBlcnNvbjwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI35fVGFiTW92aWVzXCI+PHNwYW4+TW92aWVzPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwifl9UYWJJbmZvXCIgY2xhc3M9XCJ0YWItcGFuZSBzLVRhYkluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ+X1Rvb2xiYXJcIiBjbGFzcz1cInMtRGlhbG9nVG9vbGJhclwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicy1Gb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJ+X0Zvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwifl9Qcm9wZXJ0eUdyaWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ+X1RhYk1vdmllc1wiIGNsYXNzPVwidGFiLXBhbmUgcy1UYWJNb3ZpZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ+X01vdmllc0dyaWRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGFmdGVyTG9hZEVudGl0eSgpIHtcclxuICAgICAgICAgICAgc3VwZXIuYWZ0ZXJMb2FkRW50aXR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMubW92aWVzR3JpZC5wZXJzb25JRCA9IHRoaXMuZW50aXR5SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBNb3ZpZVR1dG9yaWFsLldlYi5Nb3ZpZURCIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQZXJzb25HcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxQZXJzb25Sb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gUGVyc29uQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBQZXJzb25EaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFBlcnNvblJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQZXJzb25Sb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQZXJzb25Sb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQZXJzb25TZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIE1vdmllVHV0b3JpYWwuV2ViLk1vdmllREIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFBlcnNvbk1vdmllR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8TW92aWVDYXN0Um93LCBhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIk1vdmllREIuUGVyc29uTW92aWVcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTW92aWVDYXN0Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTW92aWVDYXN0Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTW92aWVDYXN0U2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5pdGlhbFRpdGxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIHVzZVBhZ2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRHcmlkQ2FuTG9hZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVyc29uSUQgIT0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIF9wZXJzb25JRDogbnVtYmVyO1xyXG4gICAgICAgIGdldCBwZXJzb25JRCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BlcnNvbklEO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQgcGVyc29uSUQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcGVyc29uSUQgIT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNvbklEID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVxdWFsaXR5KE1vdmllQ2FzdFJvdy5GaWVsZHMuUGVyc29uSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=