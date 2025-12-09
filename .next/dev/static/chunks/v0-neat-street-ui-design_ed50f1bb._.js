(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/v0-neat-street-ui-design/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://onzfkhuzgycuenjshrqf.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uemZraHV6Z3ljdWVuanNocnFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyMDk4NDUsImV4cCI6MjA4MDc4NTg0NX0.qQ8Ce1iyAruVf0FBOKbYKYXkSsGWMGsH2j6Q3kyt7ow"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v0-neat-street-ui-design/components/navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplet$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/droplet.js [app-client] (ecmascript) <export default as Droplet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
"use client";
;
;
function Navigation({ currentPage, setCurrentPage, userRole, setUserRole }) {
    const userNavItems = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
        },
        {
            id: "tracker",
            label: "Trash Tracker",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplet$3e$__["Droplet"]
        },
        {
            id: "waste-types",
            label: "Waste Guide",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"]
        },
        {
            id: "cost",
            label: "Cost Tracker",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"]
        },
        {
            id: "vehicle",
            label: "Vehicle Route",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"]
        },
        {
            id: "achievements",
            label: "Achievements",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"]
        }
    ];
    const adminNavItems = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
        },
        {
            id: "tracker",
            label: "Trash Tracker",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplet$3e$__["Droplet"]
        },
        {
            id: "cost",
            label: "Cost Tracker",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"]
        },
        {
            id: "vehicle",
            label: "Vehicle Route",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"]
        }
    ];
    const navItems = userRole === "admin" ? adminNavItems : userNavItems;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 h-16 bg-white/95 border-b border-border/40 backdrop-blur-md z-50 shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal-accent flex items-center justify-center text-white font-bold text-lg shadow-md",
                            children: "N"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl font-bold text-foreground tracking-tight",
                            children: "NeatStreet"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex items-center gap-1",
                    children: [
                        navItems.map((item)=>{
                            const Icon = item.icon;
                            const isActive = currentPage === item.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentPage(item.id),
                                className: `flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all duration-200 text-sm font-medium ${isActive ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-4 pl-4 border-l border-border/40 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setUserRole("user"),
                                    className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${userRole === "user" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-border/60"}`,
                                    children: "User"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setUserRole("admin"),
                                    className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${userRole === "admin" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-border/60"}`,
                                    children: "Admin"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: currentPage,
                            onChange: (e)=>setCurrentPage(e.target.value),
                            className: "px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: item.id,
                                    children: item.label
                                }, item.id, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: userRole,
                            onChange: (e)=>setUserRole(e.target.value),
                            className: "px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "user",
                                    children: "User"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "admin",
                                    children: "Admin"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/navigation.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v0-neat-street-ui-design/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v0-neat-street-ui-design/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v0-neat-street-ui-design/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v0-neat-street-ui-design/components/dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Dashboard({ onAddLog }) {
    _s();
    const [wasteData, setWasteData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [wasteTypeData, setWasteTypeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        todaysWaste: 0,
        monthlyWaste: 0,
        greenScore: 50,
        costSaved: 0,
        weeklyChange: 0
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            fetchDashboardData();
        }
    }["Dashboard.useEffect"], []);
    const fetchDashboardData = async ()=>{
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;
            // Fetch weekly waste data
            const today = new Date();
            const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
            const { data: weeklyLogs } = await supabase.from('waste_logs').select('weight, logged_at').eq('user_id', user.id).gte('logged_at', weekAgo.toISOString()).order('logged_at', {
                ascending: true
            });
            // Process weekly data
            const dayNames = [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat'
            ];
            const weeklyMap = new Map();
            for(let i = 6; i >= 0; i--){
                const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
                const dayName = dayNames[date.getDay()];
                weeklyMap.set(dayName, 0);
            }
            weeklyLogs?.forEach((log)=>{
                const date = new Date(log.logged_at);
                const dayName = dayNames[date.getDay()];
                weeklyMap.set(dayName, (weeklyMap.get(dayName) || 0) + Number(log.weight));
            });
            const processedWeeklyData = Array.from(weeklyMap.entries()).map(([name, waste])=>({
                    name,
                    waste: Number(waste.toFixed(1))
                }));
            setWasteData(processedWeeklyData);
            // Fetch waste breakdown by type
            const { data: wasteByType } = await supabase.from('waste_logs').select(`
          weight,
          waste_types (
            name,
            color
          )
        `).eq('user_id', user.id).gte('logged_at', new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString());
            // Process waste type breakdown
            const typeMap = new Map();
            wasteByType?.forEach((log)=>{
                const typeName = log.waste_types?.name || 'Unknown';
                const color = log.waste_types?.color || 'hsl(0, 0%, 50%)';
                const existing = typeMap.get(typeName) || {
                    value: 0,
                    color
                };
                typeMap.set(typeName, {
                    value: existing.value + Number(log.weight),
                    color
                });
            });
            const totalWeight = Array.from(typeMap.values()).reduce((sum, item)=>sum + item.value, 0);
            const processedTypeData = Array.from(typeMap.entries()).map(([name, data])=>({
                    name,
                    value: totalWeight > 0 ? Math.round(data.value / totalWeight * 100) : 0,
                    color: data.color
                }));
            setWasteTypeData(processedTypeData.length > 0 ? processedTypeData : [
                {
                    name: "No Data",
                    value: 100,
                    color: "hsl(0, 0%, 80%)"
                }
            ]);
            // Fetch today's waste
            const todayStart = new Date(today.setHours(0, 0, 0, 0));
            const { data: todayLogs } = await supabase.from('waste_logs').select('weight').eq('user_id', user.id).gte('logged_at', todayStart.toISOString());
            const todaysWaste = todayLogs?.reduce((sum, log)=>sum + Number(log.weight), 0) || 0;
            // Fetch monthly waste
            const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
            const { data: monthlyLogs } = await supabase.from('waste_logs').select('weight, cost').eq('user_id', user.id).gte('logged_at', monthStart.toISOString());
            const monthlyWaste = monthlyLogs?.reduce((sum, log)=>sum + Number(log.weight), 0) || 0;
            const totalCost = monthlyLogs?.reduce((sum, log)=>sum + Number(log.cost), 0) || 0;
            // Fetch user profile for green score
            const { data: profile } = await supabase.from('profiles').select('green_score, total_cost_saved').eq('id', user.id).single();
            // Calculate weekly change
            const lastWeekStart = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000);
            const lastWeekEnd = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
            const { data: lastWeekLogs } = await supabase.from('waste_logs').select('weight').eq('user_id', user.id).gte('logged_at', lastWeekStart.toISOString()).lt('logged_at', lastWeekEnd.toISOString());
            const lastWeekWaste = lastWeekLogs?.reduce((sum, log)=>sum + Number(log.weight), 0) || 0;
            const thisWeekWaste = weeklyLogs?.reduce((sum, log)=>sum + Number(log.weight), 0) || 0;
            let weeklyChange = 0;
            if (lastWeekWaste > 0) {
                weeklyChange = Math.round((lastWeekWaste - thisWeekWaste) / lastWeekWaste * 100);
            }
            setStats({
                todaysWaste: Number(todaysWaste.toFixed(1)),
                monthlyWaste: Number(monthlyWaste.toFixed(1)),
                greenScore: profile?.green_score || 50,
                costSaved: Number((profile?.total_cost_saved || totalCost * 0.1).toFixed(2)),
                weeklyChange
            });
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        } finally{
            setLoading(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "eco-gradient min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Loading dashboard..."
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
            lineNumber: 182,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "eco-gradient min-h-screen p-4 sm:p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-foreground mb-1 tracking-tight",
                            children: "Welcome Back!"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-lg",
                            children: "Track your waste and build sustainable habits"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6 bg-gradient-to-br from-white to-soft-yellow/15 hover:shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide",
                                                    children: "Today's Waste"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-foreground",
                                                    children: [
                                                        stats.todaysWaste,
                                                        " kg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full bg-soft-yellow/30 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "text-accent",
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: [
                                        stats.weeklyChange >= 0 ? `↓ ${stats.weeklyChange}%` : `↑ ${Math.abs(stats.weeklyChange)}%`,
                                        " from last week"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6 bg-gradient-to-br from-white to-light-teal/15 hover:shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide",
                                                    children: "This Month"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-foreground",
                                                    children: [
                                                        stats.monthlyWaste,
                                                        " kg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full bg-light-teal/30 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                className: "text-secondary",
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                            lineNumber: 225,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "On track with goal"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6 bg-gradient-to-br from-white to-primary/10 hover:shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide",
                                                    children: "Green Score"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-primary",
                                                    children: [
                                                        stats.greenScore,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                                                className: "text-primary",
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Based on waste composition"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6 bg-gradient-to-br from-white to-accent/10 hover:shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide",
                                                    children: "Cost Saved"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-foreground",
                                                    children: [
                                                        "$",
                                                        stats.costSaved
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                className: "text-accent",
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                            lineNumber: 251,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "This month"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6 lg:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-foreground mb-4 tracking-tight",
                                    children: "Weekly Waste Trend"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: 300,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                        data: wasteData,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3",
                                                stroke: "var(--border)"
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                lineNumber: 266,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "name",
                                                stroke: "var(--muted-foreground)"
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                lineNumber: 267,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                stroke: "var(--muted-foreground)"
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                contentStyle: {
                                                    backgroundColor: "var(--card)",
                                                    border: "1px solid var(--border)",
                                                    borderRadius: "0.75rem"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                type: "monotone",
                                                dataKey: "waste",
                                                stroke: "var(--primary)",
                                                strokeWidth: 3,
                                                dot: {
                                                    fill: "var(--primary)",
                                                    r: 5
                                                },
                                                activeDot: {
                                                    r: 7
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                lineNumber: 276,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-foreground mb-4 tracking-tight",
                                    children: "Waste Breakdown"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: 300,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                data: wasteTypeData,
                                                cx: "50%",
                                                cy: "50%",
                                                innerRadius: 60,
                                                outerRadius: 100,
                                                paddingAngle: 2,
                                                dataKey: "value",
                                                children: wasteTypeData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                        fill: entry.color
                                                    }, `cell-${index}`, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                lineNumber: 306,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-y-2",
                                    children: wasteTypeData.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded-full",
                                                            style: {
                                                                backgroundColor: type.color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: type.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-foreground",
                                                    children: [
                                                        type.value,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, type.name, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                            lineNumber: 311,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: onAddLog,
                    className: "w-full md:w-auto px-8 py-6 text-base bg-gradient-to-r from-primary to-accent hover:shadow-lg text-primary-foreground rounded-xl font-semibold transition-all duration-200 gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plus, {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this),
                        "Add Waste Log"
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                    lineNumber: 324,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
            lineNumber: 193,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "3g6dCi0THLW2/cQT9vDrQSxWCQ4=");
_c = Dashboard;
function Plus({ size }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "5",
                x2: "12",
                y2: "19"
            }, void 0, false, {
                fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "5",
                y1: "12",
                x2: "19",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/v0-neat-street-ui-design/components/dashboard.tsx",
        lineNumber: 338,
        columnNumber: 5
    }, this);
}
_c1 = Plus;
var _c, _c1;
__turbopack_context__.k.register(_c, "Dashboard");
__turbopack_context__.k.register(_c1, "Plus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AdminDashboard() {
    _s();
    const [adminWasteData, setAdminWasteData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [wasteTypeDistribution, setWasteTypeDistribution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [vehicleData, setVehicleData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        totalWaste: 0,
        avgWastePerDay: 0,
        totalUsers: 0,
        activeRoutes: 0,
        fleetCosts: 0
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            fetchAdminData();
        }
    }["AdminDashboard.useEffect"], []);
    const fetchAdminData = async ()=>{
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        try {
            // Fetch weekly waste data (all users)
            const today = new Date();
            const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
            const { data: weeklyLogs } = await supabase.from('waste_logs').select('weight, logged_at, user_id').gte('logged_at', weekAgo.toISOString()).order('logged_at', {
                ascending: true
            });
            // Process weekly data
            const dayNames = [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat'
            ];
            const weeklyMap = new Map();
            for(let i = 6; i >= 0; i--){
                const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
                const dayName = dayNames[date.getDay()];
                weeklyMap.set(dayName, {
                    waste: 0,
                    users: new Set()
                });
            }
            weeklyLogs?.forEach((log)=>{
                const date = new Date(log.logged_at);
                const dayName = dayNames[date.getDay()];
                const existing = weeklyMap.get(dayName);
                existing.waste += Number(log.weight);
                existing.users.add(log.user_id);
            });
            const processedWeeklyData = Array.from(weeklyMap.entries()).map(([name, data])=>({
                    name,
                    waste: Number(data.waste.toFixed(0)),
                    users: data.users.size
                }));
            setAdminWasteData(processedWeeklyData);
            // Calculate total waste and average
            const totalWaste = processedWeeklyData.reduce((sum, d)=>sum + d.waste, 0);
            const avgWastePerDay = totalWaste / 7;
            // Fetch waste type distribution
            const { data: wasteByType } = await supabase.from('waste_logs').select(`
          weight,
          waste_types (
            name,
            color
          )
        `).gte('logged_at', weekAgo.toISOString());
            const typeMap = new Map();
            wasteByType?.forEach((log)=>{
                const typeName = log.waste_types?.name || 'Unknown';
                const color = log.waste_types?.color || 'hsl(0, 0%, 50%)';
                const existing = typeMap.get(typeName) || {
                    value: 0,
                    color
                };
                typeMap.set(typeName, {
                    value: existing.value + Number(log.weight),
                    color
                });
            });
            const totalTypeWeight = Array.from(typeMap.values()).reduce((sum, item)=>sum + item.value, 0);
            const processedTypeData = Array.from(typeMap.entries()).map(([name, data])=>({
                    name,
                    value: totalTypeWeight > 0 ? Math.round(data.value / totalTypeWeight * 100) : 0,
                    color: data.color
                }));
            setWasteTypeDistribution(processedTypeData.length > 0 ? processedTypeData : [
                {
                    name: "No Data",
                    value: 100,
                    color: "hsl(0, 0%, 80%)"
                }
            ]);
            // Fetch total users
            const { count: userCount } = await supabase.from('profiles').select('*', {
                count: 'exact',
                head: true
            });
            // Fetch routes with vehicles
            const { data: routes } = await supabase.from('routes').select(`
          id,
          name,
          status,
          total_stops,
          distance,
          vehicles (
            fuel_cost,
            maintenance_cost,
            insurance_cost
          )
        `);
            if (routes) {
                const processedRoutes = routes.map((route)=>({
                        name: route.name,
                        trips: route.total_stops,
                        distance: Number(route.distance),
                        cost: route.vehicles ? Number(route.vehicles.fuel_cost) + Number(route.vehicles.maintenance_cost) + Number(route.vehicles.insurance_cost) : 0,
                        status: route.status
                    }));
                setVehicleData(processedRoutes);
                const activeRoutes = routes.filter((r)=>r.status === 'active').length;
                const fleetCosts = processedRoutes.reduce((sum, r)=>sum + r.cost, 0);
                setStats({
                    totalWaste,
                    avgWastePerDay: Number(avgWastePerDay.toFixed(1)),
                    totalUsers: userCount || 0,
                    activeRoutes,
                    fleetCosts
                });
            }
        } catch (error) {
            console.error('Error fetching admin data:', error);
        } finally{
            setLoading(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "eco-gradient min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Loading admin dashboard..."
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
            lineNumber: 190,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "eco-gradient min-h-screen p-4 sm:p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-foreground mb-1 tracking-tight",
                            children: "Admin Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-lg",
                            children: "System overview and fleet management"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6 bg-gradient-to-br from-white to-primary/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide",
                                                    children: "Total Waste (Week)"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-foreground",
                                                    children: [
                                                        stats.totalWaste,
                                                        " kg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "text-primary",
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: [
                                        "Avg ",
                                        stats.avgWastePerDay,
                                        " kg/day"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6 bg-gradient-to-br from-white to-secondary/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide",
                                                    children: "Active Users"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-foreground",
                                                    children: stats.totalUsers
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "text-secondary",
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Total registered users"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6 bg-gradient-to-br from-white to-accent/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide",
                                                    children: "Active Routes"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-foreground",
                                                    children: stats.activeRoutes
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                className: "text-accent",
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Currently operational"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6 bg-gradient-to-br from-white to-soft-yellow/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide",
                                                    children: "Fleet Costs"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-foreground",
                                                    children: [
                                                        "$",
                                                        stats.fleetCosts
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full bg-soft-yellow/40 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "text-yellow-600",
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "This week"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-foreground mb-4 tracking-tight",
                                    children: "Weekly Waste Collection"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: 300,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                        data: adminWasteData,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3",
                                                stroke: "var(--border)"
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                lineNumber: 274,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "name",
                                                stroke: "var(--muted-foreground)"
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                lineNumber: 275,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                stroke: "var(--muted-foreground)"
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                lineNumber: 276,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                contentStyle: {
                                                    backgroundColor: "var(--card)",
                                                    border: "1px solid var(--border)",
                                                    borderRadius: "0.75rem"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                lineNumber: 277,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                type: "monotone",
                                                dataKey: "waste",
                                                stroke: "var(--primary)",
                                                strokeWidth: 3,
                                                dot: {
                                                    fill: "var(--primary)",
                                                    r: 5
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-foreground mb-4 tracking-tight",
                                    children: "Waste Distribution"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: 300,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                data: wasteTypeDistribution,
                                                cx: "50%",
                                                cy: "50%",
                                                innerRadius: 60,
                                                outerRadius: 100,
                                                paddingAngle: 2,
                                                dataKey: "value",
                                                children: wasteTypeDistribution.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                        fill: entry.color
                                                    }, `cell-${index}`, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-y-2",
                                    children: wasteTypeDistribution.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded-full",
                                                            style: {
                                                                backgroundColor: type.color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: type.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-foreground",
                                                    children: [
                                                        type.value,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, type.name, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "eco-card p-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-foreground mb-4 tracking-tight",
                            children: "Vehicle Routes Performance"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: 300,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                data: vehicleData,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                        strokeDasharray: "3 3",
                                        stroke: "var(--border)"
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "name",
                                        stroke: "var(--muted-foreground)"
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        stroke: "var(--muted-foreground)"
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        contentStyle: {
                                            backgroundColor: "var(--card)",
                                            border: "1px solid var(--border)",
                                            borderRadius: "0.75rem"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "trips",
                                        fill: "var(--primary)",
                                        radius: [
                                            8,
                                            8,
                                            0,
                                            0
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "distance",
                                        fill: "var(--secondary)",
                                        radius: [
                                            8,
                                            8,
                                            0,
                                            0
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "eco-card p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-foreground mb-4 tracking-tight",
                            children: "Route Details"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-muted/40 border-b border-border",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left font-semibold text-foreground",
                                                    children: "Route"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left font-semibold text-foreground",
                                                    children: "Stops"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left font-semibold text-foreground",
                                                    children: "Distance (km)"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left font-semibold text-foreground",
                                                    children: "Cost"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left font-semibold text-foreground",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                            lineNumber: 357,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: vehicleData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 5,
                                                className: "px-6 py-8 text-center text-muted-foreground",
                                                children: "No routes found"
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                lineNumber: 368,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                            lineNumber: 367,
                                            columnNumber: 19
                                        }, this) : vehicleData.map((route)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-border/50 hover:bg-muted/20 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 font-medium text-foreground",
                                                        children: route.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 text-foreground",
                                                        children: route.trips
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 text-foreground",
                                                        children: route.distance
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 text-foreground font-semibold",
                                                        children: [
                                                            "$",
                                                            route.cost
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-3 py-1 rounded-full text-xs font-semibold ${route.status === 'active' ? 'bg-primary/20 text-primary' : route.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`,
                                                            children: route.status.charAt(0).toUpperCase() + route.status.slice(1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, route.name, true, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                                lineNumber: 374,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
                    lineNumber: 352,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
            lineNumber: 201,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_s(AdminDashboard, "zyHaxvGug6BY7+2BWzpH0YEqXmY=");
_c = AdminDashboard;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v0-neat-street-ui-design/components/trash-tracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrashTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const typeColors = {
    Organic: "bg-primary/20 text-primary",
    Plastic: "bg-secondary/20 text-secondary",
    Metal: "bg-accent/20 text-accent",
    Paper: "bg-yellow-100 text-yellow-700",
    Glass: "bg-blue-100 text-blue-700"
};
function TrashTracker({ onAddLog }) {
    _s();
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [trashLogs, setTrashLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [trendData, setTrendData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [wasteTypes, setWasteTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrashTracker.useEffect": ()=>{
            fetchTrashData();
        }
    }["TrashTracker.useEffect"], []);
    const fetchTrashData = async ()=>{
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;
            // Fetch waste types
            const { data: types } = await supabase.from('waste_types').select('name').order('name');
            if (types) {
                setWasteTypes(types.map((t)=>t.name));
            }
            // Fetch recent waste logs
            const { data: logs } = await supabase.from('waste_logs').select(`
          id,
          weight,
          location,
          cost,
          logged_at,
          waste_types (
            name
          )
        `).eq('user_id', user.id).order('logged_at', {
                ascending: false
            }).limit(50);
            if (logs) {
                const formattedLogs = logs.map((log)=>({
                        id: log.id,
                        date: new Date(log.logged_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        }),
                        type: log.waste_types?.name || 'Unknown',
                        weight: Number(log.weight),
                        location: log.location || 'Not specified',
                        cost: Number(log.cost) || 0
                    }));
                setTrashLogs(formattedLogs);
            }
            // Fetch trend data (last 3 weeks by waste type)
            const today = new Date();
            const threeWeeksAgo = new Date(today.getTime() - 21 * 24 * 60 * 60 * 1000);
            const { data: trendLogs } = await supabase.from('waste_logs').select(`
          weight,
          logged_at,
          waste_types (
            name
          )
        `).eq('user_id', user.id).gte('logged_at', threeWeeksAgo.toISOString()).order('logged_at', {
                ascending: true
            });
            if (trendLogs) {
                // Process trend data by waste type and week
                const trendMap = new Map();
                trendLogs.forEach((log)=>{
                    const typeName = log.waste_types?.name || 'Unknown';
                    const logDate = new Date(log.logged_at);
                    const daysAgo = Math.floor((today.getTime() - logDate.getTime()) / (24 * 60 * 60 * 1000));
                    if (!trendMap.has(typeName)) {
                        trendMap.set(typeName, {
                            week1: 0,
                            week2: 0,
                            week3: 0
                        });
                    }
                    const existing = trendMap.get(typeName);
                    if (daysAgo < 7) {
                        existing.week3 += Number(log.weight);
                    } else if (daysAgo < 14) {
                        existing.week2 += Number(log.weight);
                    } else {
                        existing.week1 += Number(log.weight);
                    }
                });
                const processedTrendData = Array.from(trendMap.entries()).map(([name, data])=>({
                        name,
                        week1: Number(data.week1.toFixed(1)),
                        week2: Number(data.week2.toFixed(1)),
                        week3: Number(data.week3.toFixed(1))
                    }));
                setTrendData(processedTrendData.length > 0 ? processedTrendData : [
                    {
                        name: "No Data",
                        week1: 0,
                        week2: 0,
                        week3: 0
                    }
                ]);
            }
        } catch (error) {
            console.error('Error fetching trash data:', error);
        } finally{
            setLoading(false);
        }
    };
    const filteredLogs = selectedType ? trashLogs.filter((log)=>log.type === selectedType) : trashLogs;
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "eco-gradient min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Loading trash tracker..."
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
            lineNumber: 163,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "eco-gradient min-h-screen p-4 sm:p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 pt-2 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-bold text-foreground mb-1 tracking-tight",
                                    children: "Trash Tracker"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-lg",
                                    children: "Monitor your waste history and patterns"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onAddLog,
                            className: "bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl gap-2 px-6 py-2 h-auto font-semibold shadow-md transition-all duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                "Add Entry"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "eco-card p-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-foreground mb-4 tracking-tight",
                            children: "Waste Trends (Last 3 Weeks)"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: 300,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                data: trendData,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                        strokeDasharray: "3 3",
                                        stroke: "var(--border)"
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "name",
                                        stroke: "var(--muted-foreground)"
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        stroke: "var(--muted-foreground)"
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        contentStyle: {
                                            backgroundColor: "var(--card)",
                                            border: "1px solid var(--border)",
                                            borderRadius: "0.75rem"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "week1",
                                        fill: "var(--primary)",
                                        radius: [
                                            8,
                                            8,
                                            0,
                                            0
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "week2",
                                        fill: "var(--secondary)",
                                        radius: [
                                            8,
                                            8,
                                            0,
                                            0
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "week3",
                                        fill: "var(--accent)",
                                        radius: [
                                            8,
                                            8,
                                            0,
                                            0
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                            size: 18,
                                            className: "text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-muted-foreground font-medium",
                                            children: "Filter:"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                wasteTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedType(selectedType === type ? null : type),
                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedType === type ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-border/60"}`,
                                        children: type
                                    }, type, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-muted/40 border-b border-border",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 text-left font-semibold text-foreground",
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 text-left font-semibold text-foreground",
                                                        children: "Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 text-left font-semibold text-foreground",
                                                        children: "Weight"
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 text-left font-semibold text-foreground",
                                                        children: "Location"
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 text-right font-semibold text-foreground",
                                                        children: "Cost"
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                                lineNumber: 240,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                            lineNumber: 239,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: filteredLogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 5,
                                                    className: "px-6 py-8 text-center text-muted-foreground",
                                                    children: "No waste logs found. Start logging your waste!"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                                lineNumber: 250,
                                                columnNumber: 21
                                            }, this) : filteredLogs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-border/50 hover:bg-muted/20 transition-colors duration-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 text-foreground",
                                                            children: log.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-3 py-1 rounded-full text-xs font-semibold ${typeColors[log.type] || "bg-gray-100 text-gray-700"}`,
                                                                children: log.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 text-foreground font-medium",
                                                            children: [
                                                                log.weight,
                                                                " kg"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 text-muted-foreground",
                                                            children: log.location
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 text-right text-foreground font-medium",
                                                            children: [
                                                                "$",
                                                                log.cost.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, log.id, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
            lineNumber: 174,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/trash-tracker.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_s(TrashTracker, "7IhvPtJg6rMokaFxW5pvgj1gvCo=");
_c = TrashTracker;
var _c;
__turbopack_context__.k.register(_c, "TrashTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v0-neat-street-ui-design/components/add-waste-log.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddWasteLog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AddWasteLog({ onClose }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        weight: "",
        type: "",
        date: new Date().toISOString().split("T")[0],
        time: "12:00",
        location: "",
        notes: ""
    });
    const [wasteTypes, setWasteTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddWasteLog.useEffect": ()=>{
            fetchWasteTypes();
        }
    }["AddWasteLog.useEffect"], []);
    const fetchWasteTypes = async ()=>{
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('waste_types').select('*').order('name');
        if (data && data.length > 0) {
            setWasteTypes(data);
            setFormData((prev)=>({
                    ...prev,
                    type: data[0].id
                }));
        } else {
            // Fallback waste types if database is empty
            const fallbackTypes = [
                {
                    id: 'organic',
                    name: 'Organic',
                    description: 'Food scraps, plant matter',
                    disposal_method: 'Compost',
                    examples: [
                        'Food waste'
                    ],
                    cost_per_kg: 0,
                    color: 'hsl(142, 70%, 50%)',
                    icon: 'Leaf',
                    created_at: new Date().toISOString()
                },
                {
                    id: 'plastic',
                    name: 'Plastic',
                    description: 'Bottles, containers',
                    disposal_method: 'Recycling',
                    examples: [
                        'Bottles'
                    ],
                    cost_per_kg: 1.5,
                    color: 'hsl(220, 70%, 50%)',
                    icon: 'Droplets',
                    created_at: new Date().toISOString()
                },
                {
                    id: 'metal',
                    name: 'Metal',
                    description: 'Cans, metal items',
                    disposal_method: 'Recycling',
                    examples: [
                        'Cans'
                    ],
                    cost_per_kg: 5.0,
                    color: 'hsl(89, 70%, 50%)',
                    icon: 'Zap',
                    created_at: new Date().toISOString()
                },
                {
                    id: 'paper',
                    name: 'Paper',
                    description: 'Paper, cardboard',
                    disposal_method: 'Recycling',
                    examples: [
                        'Newspapers'
                    ],
                    cost_per_kg: 0.5,
                    color: 'hsl(55, 70%, 50%)',
                    icon: 'FileText',
                    created_at: new Date().toISOString()
                },
                {
                    id: 'glass',
                    name: 'Glass',
                    description: 'Glass bottles, jars',
                    disposal_method: 'Recycling',
                    examples: [
                        'Bottles'
                    ],
                    cost_per_kg: 2.0,
                    color: 'hsl(200, 60%, 50%)',
                    icon: 'Gift',
                    created_at: new Date().toISOString()
                }
            ];
            setWasteTypes(fallbackTypes);
            setFormData((prev)=>({
                    ...prev,
                    type: fallbackTypes[0].id
                }));
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setError("You must be logged in to add a waste log");
                return;
            }
            // Get the cost for this waste type
            const selectedType = wasteTypes.find((t)=>t.id === formData.type);
            const cost = selectedType ? Number(formData.weight) * selectedType.cost_per_kg : 0;
            // Combine date and time
            const loggedAt = new Date(`${formData.date}T${formData.time}:00`);
            const { error: insertError } = await supabase.from('waste_logs').insert({
                user_id: user.id,
                waste_type_id: formData.type,
                weight: parseFloat(formData.weight),
                location: formData.location || null,
                notes: formData.notes || null,
                cost: cost,
                logged_at: loggedAt.toISOString()
            });
            if (insertError) throw insertError;
            onClose();
        } catch (err) {
            setError(err.message || "Failed to add waste log");
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "eco-card w-full max-w-md max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-foreground",
                            children: "Add Waste Log"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1 hover:bg-muted rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24,
                                className: "text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-foreground mb-2",
                                    children: [
                                        "Weight (kg) ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-destructive",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                            lineNumber: 114,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    step: "0.1",
                                    value: formData.weight,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            weight: e.target.value
                                        }),
                                    placeholder: "Enter weight in kg",
                                    className: "w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-foreground mb-2",
                                    children: [
                                        "Waste Type ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-destructive",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                            lineNumber: 130,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: formData.type,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            type: e.target.value
                                        }),
                                    className: "w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                    required: true,
                                    children: wasteTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: type.id,
                                            children: [
                                                type.name,
                                                " ($",
                                                type.cost_per_kg,
                                                "/kg)"
                                            ]
                                        }, type.id, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-foreground mb-2",
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: formData.date,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    date: e.target.value
                                                }),
                                            className: "w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-foreground mb-2",
                                            children: "Time"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "time",
                                            value: formData.time,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    time: e.target.value
                                                }),
                                            className: "w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-foreground mb-2",
                                    children: "Location"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.location,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            location: e.target.value
                                        }),
                                    placeholder: "Home, Office, etc.",
                                    className: "w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-foreground mb-2",
                                    children: "Notes"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.notes,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            notes: e.target.value
                                        }),
                                    placeholder: "Any additional notes...",
                                    rows: 3,
                                    className: "w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-foreground mb-3",
                                    children: "Photo (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "w-full border-2 border-dashed border-border rounded-lg p-4 hover:bg-muted/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            size: 24,
                                            className: "mx-auto mb-2 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Click to upload or drag & drop"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-4",
                            children: [
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-destructive text-sm mb-2 w-full",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    onClick: onClose,
                                    variant: "outline",
                                    className: "flex-1 rounded-lg border border-border text-foreground hover:bg-muted bg-transparent",
                                    disabled: isLoading,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    className: "flex-1 bg-primary hover:bg-primary text-primary-foreground rounded-lg font-semibold",
                                    disabled: isLoading,
                                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "mr-2 h-4 w-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this),
                                            "Adding..."
                                        ]
                                    }, void 0, true) : "Add Log"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/add-waste-log.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(AddWasteLog, "afK2WSHrZHSyljfkKI71S6IuYgU=");
_c = AddWasteLog;
var _c;
__turbopack_context__.k.register(_c, "AddWasteLog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v0-neat-street-ui-design/components/waste-types.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WasteTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const iconMap = {
    Leaf: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"],
    Droplets: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
    Zap: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    FileText: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
    Gift: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"]
};
const colorMap = {
    Organic: "from-primary to-bright-green",
    Plastic: "from-secondary to-light-teal",
    Metal: "from-accent to-primary",
    Paper: "from-soft-yellow to-accent",
    Glass: "from-light-teal to-secondary"
};
function WasteTypes() {
    _s();
    const [wasteTypes, setWasteTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WasteTypes.useEffect": ()=>{
            fetchWasteTypes();
        }
    }["WasteTypes.useEffect"], []);
    const fetchWasteTypes = async ()=>{
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        try {
            const { data } = await supabase.from('waste_types').select('*').order('name');
            if (data) {
                const processedTypes = data.map((type)=>({
                        name: type.name,
                        icon: iconMap[type.icon || 'Leaf'] || __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"],
                        color: colorMap[type.name] || "from-primary to-accent",
                        description: type.description || '',
                        disposal: type.disposal_method || '',
                        examples: type.examples || []
                    }));
                setWasteTypes(processedTypes);
            }
        } catch (error) {
            console.error('Error fetching waste types:', error);
        } finally{
            setLoading(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-background via-white to-background/80 p-4 sm:p-6 lg:p-8 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Loading waste types..."
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-background via-white to-background/80 p-4 sm:p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12 text-center pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-foreground mb-2 tracking-tight",
                            children: "Waste Type Guide"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Learn how to properly dispose of different waste types"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: wasteTypes.map((type)=>{
                        const Icon = type.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-24 bg-gradient-to-r ${type.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-4 -mt-14 relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 rounded-full bg-white border-4 border-background flex items-center justify-center shadow-md",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "text-primary",
                                                        size: 28
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-foreground",
                                                    children: type.name
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground mb-4",
                                            children: type.description
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold text-primary uppercase tracking-wide mb-2",
                                                            children: "Disposal Method"
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-foreground",
                                                            children: type.disposal
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold text-primary uppercase tracking-wide mb-2",
                                                            children: "Common Examples"
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "text-sm text-muted-foreground space-y-1",
                                                            children: type.examples.map((example)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "w-1.5 h-1.5 rounded-full bg-primary"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                                                            lineNumber: 126,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        example
                                                                    ]
                                                                }, example, true, {
                                                                    fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                                                    lineNumber: 125,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, type.name, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                            lineNumber: 95,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "eco-card p-8 mt-12 bg-gradient-to-br from-soft-yellow/20 to-light-teal/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-foreground mb-6 tracking-tight",
                            children: "Sustainability Tips"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-foreground mb-2",
                                            children: "Reduce First"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Buy less, choose products with minimal packaging, and avoid single-use items."
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-foreground mb-2",
                                            children: "Reuse When Possible"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Repurpose containers, donate items, and give products a second life."
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-foreground mb-2",
                                            children: "Recycle Correctly"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Follow local guidelines, rinse containers, and separate materials properly."
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/waste-types.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(WasteTypes, "WDL6M6YDJtlIcqbir1lEYNG9rGI=");
_c = WasteTypes;
var _c;
__turbopack_context__.k.register(_c, "WasteTypes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v0-neat-street-ui-design/components/cost-calculator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CostCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CostCalculator() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("waste");
    const [costData, setCostData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [vehicleCostData, setVehicleCostData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [municipalRates, setMunicipalRates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [monthlyData, setMonthlyData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [wasteTotalCost, setWasteTotalCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [vehicleTotalCost, setVehicleTotalCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CostCalculator.useEffect": ()=>{
            fetchCostData();
        }
    }["CostCalculator.useEffect"], []);
    const fetchCostData = async ()=>{
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;
            // Fetch waste costs by type for current month
            const monthStart = new Date();
            monthStart.setDate(1);
            monthStart.setHours(0, 0, 0, 0);
            const { data: wasteLogs } = await supabase.from('waste_logs').select(`
          cost,
          weight,
          logged_at,
          waste_types (
            name,
            color
          )
        `).eq('user_id', user.id).gte('logged_at', monthStart.toISOString());
            // Process cost data by type
            const costMap = new Map();
            wasteLogs?.forEach((log)=>{
                const typeName = log.waste_types?.name || 'Unknown';
                const color = log.waste_types?.color || 'var(--primary)';
                const existing = costMap.get(typeName) || {
                    cost: 0,
                    color
                };
                costMap.set(typeName, {
                    cost: existing.cost + Number(log.cost),
                    color
                });
            });
            const processedCostData = Array.from(costMap.entries()).map(([type, data])=>({
                    type,
                    cost: Number(data.cost.toFixed(2)),
                    color: data.color
                }));
            setCostData(processedCostData);
            setWasteTotalCost(processedCostData.reduce((sum, item)=>sum + item.cost, 0));
            // Process monthly data by week
            const weeklyMap = new Map();
            const today = new Date();
            for(let w = 1; w <= 4; w++){
                weeklyMap.set(`Week ${w}`, {
                    waste: 0,
                    vehicle: 0
                });
            }
            wasteLogs?.forEach((log)=>{
                const logDate = new Date(log.logged_at);
                const weekNum = Math.ceil(logDate.getDate() / 7);
                const weekKey = `Week ${Math.min(weekNum, 4)}`;
                const existing = weeklyMap.get(weekKey);
                existing.waste += Number(log.cost);
            });
            // Fetch vehicle costs
            const { data: vehicles } = await supabase.from('vehicles').select(`
          id,
          name,
          fuel_cost,
          maintenance_cost,
          insurance_cost,
          routes (
            name
          )
        `);
            if (vehicles) {
                const processedVehicles = vehicles.map((v)=>({
                        vehicle: v.name,
                        fuel: Number(v.fuel_cost),
                        maintenance: Number(v.maintenance_cost),
                        insurance: Number(v.insurance_cost),
                        route: v.routes?.[0]?.name || 'Not assigned'
                    }));
                setVehicleCostData(processedVehicles);
                const totalVehicleCost = processedVehicles.reduce((sum, v)=>sum + v.fuel + v.maintenance + v.insurance, 0);
                setVehicleTotalCost(totalVehicleCost);
                // Add vehicle costs to weekly data
                const vehicleCostPerWeek = totalVehicleCost / 4;
                weeklyMap.forEach((data)=>{
                    data.vehicle = Number(vehicleCostPerWeek.toFixed(0));
                });
            }
            const processedMonthlyData = Array.from(weeklyMap.entries()).map(([week, data])=>({
                    week,
                    waste: Number(data.waste.toFixed(0)),
                    vehicle: data.vehicle
                }));
            setMonthlyData(processedMonthlyData);
            // Fetch municipal rates
            const { data: rates } = await supabase.from('municipal_rates').select(`
          rate_per_kg,
          collection_frequency,
          last_updated,
          waste_types (
            name
          )
        `);
            if (rates) {
                const processedRates = rates.map((r)=>({
                        type: r.waste_types?.name || 'Unknown',
                        rate: `$${Number(r.rate_per_kg).toFixed(2)}/kg`,
                        freq: r.collection_frequency || 'Weekly',
                        updated: new Date(r.last_updated).toLocaleDateString('en-US', {
                            month: 'short',
                            year: 'numeric'
                        })
                    }));
                setMunicipalRates(processedRates);
            }
        } catch (error) {
            console.error('Error fetching cost data:', error);
        } finally{
            setLoading(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-background via-white to-background/80 p-4 sm:p-6 lg:p-8 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Loading cost data..."
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
            lineNumber: 184,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-background via-white to-background/80 p-4 sm:p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-foreground mb-1 tracking-tight",
                            children: "Cost Tracker"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-lg",
                            children: "Monitor disposal and vehicle costs"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab("waste"),
                            className: `px-6 py-2 rounded-xl font-semibold transition-all duration-200 ${activeTab === "waste" ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-border/60"}`,
                            children: "Waste Costs"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab("vehicle"),
                            className: `px-6 py-2 rounded-xl font-semibold transition-all duration-200 ${activeTab === "vehicle" ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-border/60"}`,
                            children: "Vehicle Costs"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this),
                activeTab === "waste" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "eco-card p-6 bg-gradient-to-br from-white to-accent/10 hover:shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide",
                                            children: "Total Cost This Month"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-4xl font-bold text-foreground",
                                            children: [
                                                "$",
                                                wasteTotalCost.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-2",
                                            children: "↓ 12% from last month"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 234,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "eco-card p-6 bg-gradient-to-br from-white to-primary/10 hover:shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide",
                                            children: "Average per Week"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-4xl font-bold text-primary",
                                            children: [
                                                "$",
                                                (wasteTotalCost / 4).toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-2",
                                            children: "Stable spending"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 242,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "eco-card p-6 bg-gradient-to-br from-white to-secondary/10 hover:shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide",
                                            children: "Projections Next Month"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-4xl font-bold text-secondary",
                                            children: [
                                                "$",
                                                (wasteTotalCost * 1.05).toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-2",
                                            children: "Based on trends"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                            lineNumber: 228,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "eco-card p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-foreground mb-4 tracking-tight",
                                            children: "Cost by Waste Type"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: 300,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                data: costData,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                        strokeDasharray: "3 3",
                                                        stroke: "var(--border)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        dataKey: "type",
                                                        stroke: "var(--muted-foreground)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                        stroke: "var(--muted-foreground)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        contentStyle: {
                                                            backgroundColor: "var(--card)",
                                                            border: "1px solid var(--border)",
                                                            borderRadius: "0.75rem"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                        dataKey: "cost",
                                                        fill: "var(--primary)",
                                                        radius: [
                                                            8,
                                                            8,
                                                            0,
                                                            0
                                                        ]
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                lineNumber: 259,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                    lineNumber: 256,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "eco-card p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-foreground mb-4 tracking-tight",
                                            children: "Distribution"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: 300,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                        data: costData.filter((item)=>item.cost > 0),
                                                        cx: "50%",
                                                        cy: "50%",
                                                        labelLine: false,
                                                        outerRadius: 100,
                                                        fill: "#8884d8",
                                                        dataKey: "cost",
                                                        children: costData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                fill: entry.color
                                                            }, `cell-${index}`, false, {
                                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                lineNumber: 278,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-foreground mb-4 tracking-tight",
                                    children: "Municipal Waste Rates"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                    lineNumber: 300,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-muted/40 border-b border-border",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-4 text-left font-semibold text-foreground",
                                                            children: "Waste Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-4 text-left font-semibold text-foreground",
                                                            children: "Per kg"
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-4 text-left font-semibold text-foreground",
                                                            children: "Collection Frequency"
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-4 text-left font-semibold text-foreground",
                                                            children: "Last Updated"
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                lineNumber: 303,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: municipalRates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 4,
                                                        className: "px-6 py-8 text-center text-muted-foreground",
                                                        children: "No municipal rates found"
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 23
                                                }, this) : municipalRates.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-b border-border/50 hover:bg-muted/20 transition-colors duration-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 font-medium text-foreground",
                                                                children: row.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 text-foreground",
                                                                children: row.rate
                                                            }, void 0, false, {
                                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 text-muted-foreground",
                                                                children: row.freq
                                                            }, void 0, false, {
                                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 text-muted-foreground",
                                                                children: row.updated
                                                            }, void 0, false, {
                                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, row.type, true, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                lineNumber: 311,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                        lineNumber: 302,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                    lineNumber: 301,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                            lineNumber: 299,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                activeTab === "vehicle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "eco-card p-6 bg-gradient-to-br from-white to-accent/10 hover:shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide",
                                            children: "Total Vehicle Cost This Month"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-4xl font-bold text-foreground",
                                            children: [
                                                "$",
                                                vehicleTotalCost.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-2",
                                            children: [
                                                vehicleCostData.length,
                                                " active vehicles"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 346,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                    lineNumber: 341,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "eco-card p-6 bg-gradient-to-br from-white to-primary/10 hover:shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide",
                                            children: "Average per Vehicle"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 350,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-4xl font-bold text-primary",
                                            children: [
                                                "$",
                                                vehicleCostData.length > 0 ? (vehicleTotalCost / vehicleCostData.length).toFixed(2) : '0.00'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-2",
                                            children: "Monthly cost"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "eco-card p-6 bg-gradient-to-br from-white to-secondary/10 hover:shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide",
                                            children: "Cost per km"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-4xl font-bold text-secondary",
                                            children: "$0.58"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-2",
                                            children: "Average efficiency"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 362,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                    lineNumber: 359,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                            lineNumber: 340,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "eco-card p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-foreground mb-4 tracking-tight",
                                            children: "Combined Costs & Waste"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 369,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: 300,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                data: monthlyData,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                        strokeDasharray: "3 3",
                                                        stroke: "var(--border)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        dataKey: "week",
                                                        stroke: "var(--muted-foreground)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                        stroke: "var(--muted-foreground)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        contentStyle: {
                                                            backgroundColor: "var(--card)",
                                                            border: "1px solid var(--border)",
                                                            borderRadius: "0.75rem"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                        dataKey: "waste",
                                                        fill: "var(--primary)",
                                                        radius: [
                                                            8,
                                                            8,
                                                            0,
                                                            0
                                                        ]
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                        dataKey: "vehicle",
                                                        fill: "var(--secondary)",
                                                        radius: [
                                                            8,
                                                            8,
                                                            0,
                                                            0
                                                        ]
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                lineNumber: 371,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 370,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "eco-card p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-foreground mb-4 tracking-tight",
                                            children: "Vehicle Cost Breakdown"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: 300,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                        data: [
                                                            {
                                                                name: "Fuel",
                                                                value: 40,
                                                                color: "hsl(142, 70%, 50%)"
                                                            },
                                                            {
                                                                name: "Maintenance",
                                                                value: 35,
                                                                color: "hsl(220, 70%, 50%)"
                                                            },
                                                            {
                                                                name: "Insurance",
                                                                value: 25,
                                                                color: "hsl(55, 70%, 50%)"
                                                            }
                                                        ],
                                                        cx: "50%",
                                                        cy: "50%",
                                                        labelLine: false,
                                                        outerRadius: 100,
                                                        fill: "#8884d8",
                                                        dataKey: "value",
                                                        children: [
                                                            {
                                                                name: "Fuel",
                                                                value: 40,
                                                                color: "hsl(142, 70%, 50%)"
                                                            },
                                                            {
                                                                name: "Maintenance",
                                                                value: 35,
                                                                color: "hsl(220, 70%, 50%)"
                                                            },
                                                            {
                                                                name: "Insurance",
                                                                value: 25,
                                                                color: "hsl(55, 70%, 50%)"
                                                            }
                                                        ].map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                fill: entry.color
                                                            }, `cell-${index}`, false, {
                                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                                lineNumber: 410,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                lineNumber: 391,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                            lineNumber: 367,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-foreground mb-4 tracking-tight",
                                    children: "Vehicle Cost Details"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                    lineNumber: 420,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-muted/40 border-b border-border",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-4 text-left font-semibold text-foreground",
                                                            children: "Vehicle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-4 text-left font-semibold text-foreground",
                                                            children: "Fuel Cost"
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-4 text-left font-semibold text-foreground",
                                                            children: "Maintenance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                            lineNumber: 427,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-4 text-left font-semibold text-foreground",
                                                            children: "Insurance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                            lineNumber: 428,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-4 text-left font-semibold text-foreground",
                                                            children: "Total Cost"
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                            lineNumber: 429,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-4 text-left font-semibold text-foreground",
                                                            children: "Route"
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                lineNumber: 423,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: vehicleCostData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 6,
                                                        className: "px-6 py-8 text-center text-muted-foreground",
                                                        children: "No vehicle data found"
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 23
                                                }, this) : vehicleCostData.map((vehicle)=>{
                                                    const totalCost = vehicle.fuel + vehicle.maintenance + vehicle.insurance;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-b border-border/50 hover:bg-muted/20 transition-colors duration-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 font-medium text-foreground",
                                                                children: vehicle.vehicle
                                                            }, void 0, false, {
                                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                                lineNumber: 448,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 text-foreground",
                                                                children: [
                                                                    "$",
                                                                    vehicle.fuel
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                                lineNumber: 449,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 text-foreground",
                                                                children: [
                                                                    "$",
                                                                    vehicle.maintenance
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                                lineNumber: 450,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 text-foreground",
                                                                children: [
                                                                    "$",
                                                                    vehicle.insurance
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 font-semibold text-foreground",
                                                                children: [
                                                                    "$",
                                                                    totalCost
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                                lineNumber: 452,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 text-foreground",
                                                                children: vehicle.route
                                                            }, void 0, false, {
                                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, vehicle.vehicle, true, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                                lineNumber: 433,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                        lineNumber: 422,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
                            lineNumber: 419,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/cost-calculator.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_s(CostCalculator, "KhyfX6rRnsYhcXkFdpVZpNb/5yo=");
_c = CostCalculator;
var _c;
__turbopack_context__.k.register(_c, "CostCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v0-neat-street-ui-design/components/vehicle-route.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VehicleRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const statusColors = {
    active: "bg-primary/20 text-primary",
    pending: "bg-soft-yellow/40 text-yellow-700",
    completed: "bg-accent/20 text-accent"
};
function VehicleRoute() {
    _s();
    const [selectedRoute, setSelectedRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showMap, setShowMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [routes, setRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VehicleRoute.useEffect": ()=>{
            fetchRoutes();
        }
    }["VehicleRoute.useEffect"], []);
    const fetchRoutes = async ()=>{
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        try {
            // Fetch routes with vehicle and stops
            const { data: routesData } = await supabase.from('routes').select(`
          id,
          name,
          status,
          total_stops,
          distance,
          duration,
          vehicles (
            name
          )
        `).order('name');
            if (routesData) {
                const processedRoutes = [];
                for (const route of routesData){
                    // Fetch stops for each route
                    const { data: stops } = await supabase.from('route_stops').select('*').eq('route_id', route.id).order('order_index');
                    const routeStops = (stops || []).map((stop)=>({
                            id: stop.id,
                            address: stop.address,
                            time: stop.scheduled_time || 'TBD',
                            waste: Number(stop.expected_waste) || 0,
                            order_index: stop.order_index
                        }));
                    processedRoutes.push({
                        id: route.id,
                        name: route.name,
                        vehicle: route.vehicles?.name || 'Unassigned',
                        status: route.status,
                        stops: route.total_stops,
                        distance: Number(route.distance),
                        duration: route.duration || 'TBD',
                        stops_list: routeStops
                    });
                }
                setRoutes(processedRoutes);
                if (processedRoutes.length > 0) {
                    setSelectedRoute(processedRoutes[0].id);
                }
            }
        } catch (error) {
            console.error('Error fetching routes:', error);
        } finally{
            setLoading(false);
        }
    };
    const currentRoute = routes.find((r)=>r.id === selectedRoute);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "eco-gradient min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Loading routes..."
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "eco-gradient min-h-screen p-4 sm:p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-foreground mb-1 tracking-tight",
                            children: "Vehicle Routes"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-lg",
                            children: "Manage waste collection routes and vehicle assignments"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",
                    children: routes.map((route)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedRoute(route.id),
                            className: `text-left transition-all duration-200 ${selectedRoute === route.id ? "ring-2 ring-primary shadow-lg" : ""}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: `eco-card p-6 cursor-pointer ${selectedRoute === route.id ? "bg-primary/5" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-foreground mb-1",
                                                        children: route.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: route.vehicle
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `px-2 py-1 rounded-full text-xs font-semibold ${statusColors[route.status]}`,
                                                children: route.status.charAt(0).toUpperCase() + route.status.slice(1)
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    route.distance,
                                                    " km"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    route.duration
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                lineNumber: 158,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    route.stops,
                                                    " stops"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this)
                        }, route.id, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                currentRoute && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        showMap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-foreground tracking-tight",
                                            children: [
                                                "Live Route Map - ",
                                                currentRoute.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>setShowMap(false),
                                            children: "Close Map"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                            lineNumber: 179,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-muted/20 rounded-lg p-8 border-2 border-dashed border-primary/30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center gap-4 min-h-96",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                                className: "text-primary/50",
                                                size: 64
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                lineNumber: 186,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-foreground mb-2",
                                                        children: "Map Integration Ready"
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground text-sm max-w-md",
                                                        children: "Provide your map API URL and authentication key to display live bus tracking and route visualization."
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                lineNumber: 187,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 p-4 bg-secondary/10 rounded-lg max-w-md",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground font-mono",
                                                    children: "Ready to integrate: MapBox, Google Maps, or custom API endpoint"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                lineNumber: 194,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                        lineNumber: 185,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                    lineNumber: 184,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                            lineNumber: 174,
                            columnNumber: 15
                        }, this),
                        !showMap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setShowMap(true),
                            className: "mb-8 gap-2",
                            variant: "default",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, this),
                                "View Live Route Map"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                            lineNumber: 205,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "eco-card p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-semibold text-foreground tracking-tight",
                                                        children: [
                                                            currentRoute.name,
                                                            " Details"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-3 py-1 rounded-full text-sm font-semibold ${statusColors[currentRoute.status]}`,
                                                        children: currentRoute.status.charAt(0).toUpperCase() + currentRoute.status.slice(1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overflow-x-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "w-full text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            className: "bg-muted/40 border-b border-border",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "px-6 py-4 text-left font-semibold text-foreground",
                                                                        children: "Stop"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                                        lineNumber: 230,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "px-6 py-4 text-left font-semibold text-foreground",
                                                                        children: "Address"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                                        lineNumber: 231,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "px-6 py-4 text-left font-semibold text-foreground",
                                                                        children: "Scheduled Time"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                                        lineNumber: 232,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "px-6 py-4 text-right font-semibold text-foreground",
                                                                        children: "Waste (kg)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                                        lineNumber: 233,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: currentRoute.stops_list.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    colSpan: 4,
                                                                    className: "px-6 py-8 text-center text-muted-foreground",
                                                                    children: "No stops found for this route"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 27
                                                            }, this) : currentRoute.stops_list.map((stop, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "border-b border-border/50 hover:bg-muted/20 transition-colors duration-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-6 py-4 font-medium text-foreground",
                                                                            children: [
                                                                                "#",
                                                                                index + 1
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                                            lineNumber: 249,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-6 py-4 text-foreground",
                                                                            children: stop.address
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                                            lineNumber: 250,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-6 py-4 text-muted-foreground",
                                                                            children: stop.time
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                                            lineNumber: 251,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-6 py-4 text-right text-foreground font-semibold",
                                                                            children: stop.waste
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                                            lineNumber: 252,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, stop.id, true, {
                                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                lineNumber: 226,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "eco-card p-6 bg-gradient-to-br from-white to-primary/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide",
                                                    children: "Total Distance"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-foreground",
                                                    children: [
                                                        currentRoute.distance,
                                                        " km"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mt-2",
                                                    children: "Route coverage area"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "eco-card p-6 bg-gradient-to-br from-white to-secondary/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide",
                                                    children: "Estimated Duration"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-secondary",
                                                    children: currentRoute.duration
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mt-2",
                                                    children: "Collection time"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "eco-card p-6 bg-gradient-to-br from-white to-accent/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide",
                                                    children: "Total Stops"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-accent",
                                                    children: currentRoute.stops
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mt-2",
                                                    children: "Pickup locations"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                            lineNumber: 280,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "eco-card p-6 bg-gradient-to-br from-white to-soft-yellow/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide",
                                                    children: "Assigned Vehicle"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-bold text-foreground",
                                                    children: currentRoute.vehicle
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mt-2",
                                                    children: "Primary collection unit"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this),
                        currentRoute.status === "active" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "eco-card p-6 mb-8 border-2 border-primary/30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "text-primary",
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                            lineNumber: 303,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                        lineNumber: 302,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-foreground mb-1",
                                                children: "Route in Progress"
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                lineNumber: 306,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "This route is currently being executed. Real-time updates will be shown as stops are completed."
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                                lineNumber: 307,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                        lineNumber: 305,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                                lineNumber: 301,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
                            lineNumber: 300,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
            lineNumber: 123,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/vehicle-route.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_s(VehicleRoute, "oeeHpmD2yS+qsFEclg5i+QYkd7o=");
_c = VehicleRoute;
var _c;
__turbopack_context__.k.register(_c, "VehicleRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v0-neat-street-ui-design/components/achievements.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Achievements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const iconMap = {
    Star: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
    Trophy: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
    Target: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
    Zap: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    Crown: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"],
    Heart: __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
};
function Achievements() {
    _s();
    const [achievements, setAchievements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Achievements.useEffect": ()=>{
            fetchAchievements();
        }
    }["Achievements.useEffect"], []);
    const fetchAchievements = async ()=>{
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;
            // Fetch user achievements with achievement details
            const { data: userAchievements } = await supabase.from('user_achievements').select(`
          id,
          progress,
          unlocked,
          achievements (
            id,
            name,
            description,
            icon,
            requirement_type,
            requirement_value
          )
        `).eq('user_id', user.id);
            if (userAchievements && userAchievements.length > 0) {
                const formattedAchievements = userAchievements.map((ua)=>({
                        id: ua.achievements.id,
                        name: ua.achievements.name,
                        description: ua.achievements.description,
                        icon: iconMap[ua.achievements.icon] || __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
                        unlocked: ua.unlocked,
                        progress: ua.progress
                    }));
                setAchievements(formattedAchievements);
            } else {
                // Fetch all achievements if user doesn't have any yet
                const { data: allAchievements } = await supabase.from('achievements').select('*').order('requirement_value', {
                    ascending: true
                });
                if (allAchievements) {
                    const formattedAchievements = allAchievements.map((a)=>({
                            id: a.id,
                            name: a.name,
                            description: a.description,
                            icon: iconMap[a.icon] || __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
                            unlocked: false,
                            progress: 0
                        }));
                    setAchievements(formattedAchievements);
                }
            }
        } catch (error) {
            console.error('Error fetching achievements:', error);
        } finally{
            setLoading(false);
        }
    };
    const unlockedCount = achievements.filter((a)=>a.unlocked).length;
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-background via-white to-background/80 p-4 sm:p-6 lg:p-8 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Loading achievements..."
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-background via-white to-background/80 p-4 sm:p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12 pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-foreground mb-2 tracking-tight",
                            children: "Your Achievements"
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground",
                            children: [
                                "You've unlocked",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-primary",
                                    children: [
                                        unlockedCount,
                                        " of ",
                                        achievements.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                " ",
                                "achievements"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "eco-card p-8 mb-12 bg-gradient-to-br from-primary/10 to-accent/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground font-semibold mb-2 uppercase tracking-wide",
                                            children: "Overall Progress"
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-4xl font-bold text-foreground",
                                            children: [
                                                unlockedCount,
                                                " Unlocked"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 h-24 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white shadow-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold",
                                        children: [
                                            Math.round(unlockedCount / achievements.length * 100),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-2 bg-border rounded-full overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-gradient-to-r from-primary to-accent transition-all duration-500",
                                style: {
                                    width: `${unlockedCount / achievements.length * 100}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: achievements.map((achievement)=>{
                        const Icon = achievement.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: `eco-card p-6 transition-all duration-300 ${achievement.unlocked ? "bg-gradient-to-br from-white to-accent/10 hover:shadow-lg" : "bg-gradient-to-br from-white to-muted/50 opacity-75 hover:shadow-md"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md ${achievement.unlocked ? "bg-gradient-to-br from-primary to-accent" : "bg-gradient-to-br from-muted to-border"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 28,
                                        className: achievement.unlocked ? "text-white" : "text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                        lineNumber: 167,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                    lineNumber: 160,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-foreground mb-1",
                                    children: achievement.name
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground mb-4",
                                    children: achievement.description
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground font-medium",
                                                    children: "Progress"
                                                }, void 0, false, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: achievement.unlocked ? "text-primary font-semibold" : "text-muted-foreground",
                                                    children: [
                                                        achievement.progress,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-1.5 bg-border rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `h-full transition-all duration-500 ${achievement.unlocked ? "bg-gradient-to-r from-primary to-accent" : "bg-muted-foreground"}`,
                                                style: {
                                                    width: `${achievement.progress}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                                lineNumber: 183,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 pt-4 border-t border-border/50",
                                    children: achievement.unlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-primary uppercase tracking-wide",
                                        children: "✓ Unlocked"
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                        lineNumber: 195,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Keep going to unlock"
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                        lineNumber: 197,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                    lineNumber: 193,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, achievement.id, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                            lineNumber: 151,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "eco-card p-8 mt-12 text-center bg-gradient-to-r from-soft-yellow/20 via-transparent to-light-teal/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                className: "w-16 h-16 mx-auto mb-4 text-accent"
                            }, void 0, false, {
                                fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-foreground mb-2 tracking-tight",
                                children: "Great Work!"
                            }, void 0, false, {
                                fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-6",
                                children: "You're making a real impact on the environment. Keep logging your waste and aim for more achievements!"
                            }, void 0, false, {
                                fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-muted-foreground bg-white/50 rounded-xl p-4 inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-foreground mb-1",
                                        children: "Next Goal:"
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: 'Reach 80% green score to unlock "Carbon Cutter"'
                                    }, void 0, false, {
                                        fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/v0-neat-street-ui-design/components/achievements.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(Achievements, "mWHlrYRDcbEhcgPAc7naB3W2qVg=");
_c = Achievements;
var _c;
__turbopack_context__.k.register(_c, "Achievements");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v0-neat-street-ui-design/components/dashboard-client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$admin$2d$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/admin-dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$trash$2d$tracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/trash-tracker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$add$2d$waste$2d$log$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/add-waste-log.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$waste$2d$types$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/waste-types.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$cost$2d$calculator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/cost-calculator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$vehicle$2d$route$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/vehicle-route.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$achievements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/achievements.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/v0-neat-street-ui-design/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function DashboardClient({ user, isAdmin }) {
    _s();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const [showAddLog, setShowAddLog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isAdmin ? "admin" : "user");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Check sessionStorage for admin mode on client side
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardClient.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const adminMode = sessionStorage.getItem("adminMode");
                if (adminMode === "true") {
                    setUserRole("admin");
                }
            }
        }
    }["DashboardClient.useEffect"], []);
    const handleLogout = async ()=>{
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        await supabase.auth.signOut();
        if ("TURBOPACK compile-time truthy", 1) {
            sessionStorage.removeItem("adminMode");
        }
        router.push("/auth/login");
    };
    const handleAddLog = ()=>{
        setShowAddLog(true);
    };
    const handleCloseAddLog = ()=>{
        setShowAddLog(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                currentPage: currentPage,
                setCurrentPage: setCurrentPage,
                userRole: userRole
            }, void 0, false, {
                fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-foreground",
                                    children: user?.email
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: isAdmin ? "Admin" : "User"
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            onClick: handleLogout,
                            className: "gap-2 bg-transparent",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                "Logout"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-16",
                children: [
                    userRole === "user" && currentPage === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onAddLog: handleAddLog
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                        lineNumber: 69,
                        columnNumber: 64
                    }, this),
                    userRole === "user" && currentPage === "tracker" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$trash$2d$tracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onAddLog: handleAddLog
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                        lineNumber: 70,
                        columnNumber: 62
                    }, this),
                    userRole === "user" && currentPage === "waste-types" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$waste$2d$types$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                        lineNumber: 71,
                        columnNumber: 66
                    }, this),
                    userRole === "user" && currentPage === "cost" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$cost$2d$calculator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                        lineNumber: 72,
                        columnNumber: 59
                    }, this),
                    userRole === "user" && currentPage === "vehicle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$vehicle$2d$route$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                        lineNumber: 73,
                        columnNumber: 62
                    }, this),
                    userRole === "user" && currentPage === "achievements" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$achievements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                        lineNumber: 74,
                        columnNumber: 67
                    }, this),
                    userRole === "admin" && currentPage === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$admin$2d$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                        lineNumber: 76,
                        columnNumber: 65
                    }, this),
                    userRole === "admin" && currentPage === "tracker" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$trash$2d$tracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onAddLog: handleAddLog
                    }, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                        lineNumber: 77,
                        columnNumber: 63
                    }, this),
                    userRole === "admin" && currentPage === "cost" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$cost$2d$calculator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                        lineNumber: 78,
                        columnNumber: 60
                    }, this),
                    userRole === "admin" && currentPage === "vehicle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$vehicle$2d$route$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                        lineNumber: 79,
                        columnNumber: 63
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            showAddLog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$components$2f$add$2d$waste$2d$log$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: handleCloseAddLog
            }, void 0, false, {
                fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
                lineNumber: 82,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/v0-neat-street-ui-design/components/dashboard-client.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(DashboardClient, "Wa1dR1kYihnPWvsBe0lEVjQ+xNA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$v0$2d$neat$2d$street$2d$ui$2d$design$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardClient;
var _c;
__turbopack_context__.k.register(_c, "DashboardClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=v0-neat-street-ui-design_ed50f1bb._.js.map