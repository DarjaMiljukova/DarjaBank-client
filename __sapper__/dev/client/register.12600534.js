import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, q as stores$1, r as validate_store, u as component_subscribe, w as goto, a as space, e as element, t as text, h as head_selector, b as detach_dev, c as claim_space, f as claim_element, g as children, j as claim_text, k as attr_dev, l as add_location, n as insert_hydration_dev, o as append_hydration_dev, x as set_input_value, y as listen_dev, z as prevent_default, A as prop_dev, p as noop, B as run_all, C as set_store_value, D as set_data_dev } from './client.511fb8f5.js';

function post(endpoint, data) {
    return fetch(endpoint, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(data || {}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((r) => r.json());
}

/* src\routes\register.svelte generated by Svelte v3.59.2 */
const file = "src\\routes\\register.svelte";

// (37:4) {#if error}
function create_if_block_1(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text(/*error*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, role: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, /*error*/ ctx[3]);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "alert-danger");
			attr_dev(div, "role", "alert");
			add_location(div, file, 37, 5, 790);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);
			append_hydration_dev(div, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*error*/ 8) set_data_dev(t, /*error*/ ctx[3]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(37:4) {#if error}",
		ctx
	});

	return block;
}

// (50:6) {#if password.length > 1 && password.length < 6}
function create_if_block(ctx) {
	let sup;
	let div;
	let t;

	const block = {
		c: function create() {
			sup = element("sup");
			div = element("div");
			t = text("Password too short");
			this.h();
		},
		l: function claim(nodes) {
			sup = claim_element(nodes, "SUP", {});
			var sup_nodes = children(sup);
			div = claim_element(sup_nodes, "DIV", { class: true, role: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "Password too short");
			div_nodes.forEach(detach_dev);
			sup_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "alert alert-danger");
			attr_dev(div, "role", "alert");
			add_location(div, file, 49, 60, 1446);
			add_location(sup, file, 49, 54, 1440);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, sup, anchor);
			append_hydration_dev(sup, div);
			append_hydration_dev(div, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(sup);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(50:6) {#if password.length > 1 && password.length < 6}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div3;
	let div2;
	let div1;
	let div0;
	let h1;
	let t1;
	let t2;
	let p;
	let a;
	let t3;
	let t4;
	let t5;
	let form;
	let fieldset0;
	let input0;
	let t6;
	let fieldset1;
	let input1;
	let t7;
	let fieldset2;
	let input2;
	let t8;
	let t9;
	let button;
	let t10;
	let button_disabled_value;
	let mounted;
	let dispose;
	let if_block0 = /*error*/ ctx[3] && create_if_block_1(ctx);
	let if_block1 = /*password*/ ctx[2].length > 1 && /*password*/ ctx[2].length < 6 && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t1 = text("Sign up");
			t2 = space();
			p = element("p");
			a = element("a");
			t3 = text("Have an account?");
			t4 = space();
			if (if_block0) if_block0.c();
			t5 = space();
			form = element("form");
			fieldset0 = element("fieldset");
			input0 = element("input");
			t6 = space();
			fieldset1 = element("fieldset");
			input1 = element("input");
			t7 = space();
			fieldset2 = element("fieldset");
			input2 = element("input");
			t8 = space();
			if (if_block1) if_block1.c();
			t9 = space();
			button = element("button");
			t10 = text("Sign up");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = head_selector('svelte-15rwypm', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Sign up");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			a = claim_element(p_nodes, "A", { href: true });
			var a_nodes = children(a);
			t3 = claim_text(a_nodes, "Have an account?");
			a_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			if (if_block0) if_block0.l(div0_nodes);
			t5 = claim_space(div0_nodes);
			form = claim_element(div0_nodes, "FORM", {});
			var form_nodes = children(form);
			fieldset0 = claim_element(form_nodes, "FIELDSET", { class: true });
			var fieldset0_nodes = children(fieldset0);

			input0 = claim_element(fieldset0_nodes, "INPUT", {
				class: true,
				type: true,
				placeholder: true
			});

			fieldset0_nodes.forEach(detach_dev);
			t6 = claim_space(form_nodes);
			fieldset1 = claim_element(form_nodes, "FIELDSET", { class: true });
			var fieldset1_nodes = children(fieldset1);

			input1 = claim_element(fieldset1_nodes, "INPUT", {
				class: true,
				type: true,
				placeholder: true
			});

			fieldset1_nodes.forEach(detach_dev);
			t7 = claim_space(form_nodes);
			fieldset2 = claim_element(form_nodes, "FIELDSET", { class: true });
			var fieldset2_nodes = children(fieldset2);

			input2 = claim_element(fieldset2_nodes, "INPUT", {
				class: true,
				type: true,
				placeholder: true
			});

			t8 = claim_space(fieldset2_nodes);
			if (if_block1) if_block1.l(fieldset2_nodes);
			fieldset2_nodes.forEach(detach_dev);
			t9 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t10 = claim_text(button_nodes, "Sign up");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sign up • Conduit";
			attr_dev(h1, "class", "text-xs-center");
			add_location(h1, file, 31, 4, 645);
			attr_dev(a, "href", "/login");
			add_location(a, file, 33, 5, 721);
			attr_dev(p, "class", "text-xs-center");
			add_location(p, file, 32, 4, 689);
			attr_dev(input0, "class", "form-control form-control-lg");
			attr_dev(input0, "type", "text");
			input0.required = true;
			attr_dev(input0, "placeholder", "Your Name");
			add_location(input0, file, 42, 6, 940);
			attr_dev(fieldset0, "class", "form-group");
			add_location(fieldset0, file, 41, 5, 904);
			attr_dev(input1, "class", "form-control form-control-lg");
			attr_dev(input1, "type", "text");
			input1.required = true;
			attr_dev(input1, "placeholder", "Name");
			add_location(input1, file, 45, 6, 1110);
			attr_dev(fieldset1, "class", "form-group");
			add_location(fieldset1, file, 44, 5, 1074);
			attr_dev(input2, "class", "form-control form-control-lg");
			attr_dev(input2, "type", "password");
			input2.required = true;
			attr_dev(input2, "placeholder", "Password");
			add_location(input2, file, 48, 6, 1271);
			attr_dev(fieldset2, "class", "form-group");
			add_location(fieldset2, file, 47, 5, 1235);
			attr_dev(button, "class", "btn btn-lg btn-primary pull-xs-right");
			button.disabled = button_disabled_value = /*password*/ ctx[2].length < 6;
			add_location(button, file, 51, 5, 1549);
			add_location(form, file, 40, 4, 858);
			attr_dev(div0, "class", "col-md-6 offset-md-3 col-xs-12");
			add_location(div0, file, 30, 3, 596);
			attr_dev(div1, "class", "row");
			add_location(div1, file, 29, 2, 575);
			attr_dev(div2, "class", "container page");
			add_location(div2, file, 28, 1, 544);
			attr_dev(div3, "class", "auth-page");
			add_location(div3, file, 27, 0, 519);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, div3, anchor);
			append_hydration_dev(div3, div2);
			append_hydration_dev(div2, div1);
			append_hydration_dev(div1, div0);
			append_hydration_dev(div0, h1);
			append_hydration_dev(h1, t1);
			append_hydration_dev(div0, t2);
			append_hydration_dev(div0, p);
			append_hydration_dev(p, a);
			append_hydration_dev(a, t3);
			append_hydration_dev(div0, t4);
			if (if_block0) if_block0.m(div0, null);
			append_hydration_dev(div0, t5);
			append_hydration_dev(div0, form);
			append_hydration_dev(form, fieldset0);
			append_hydration_dev(fieldset0, input0);
			set_input_value(input0, /*username*/ ctx[0]);
			append_hydration_dev(form, t6);
			append_hydration_dev(form, fieldset1);
			append_hydration_dev(fieldset1, input1);
			set_input_value(input1, /*name*/ ctx[1]);
			append_hydration_dev(form, t7);
			append_hydration_dev(form, fieldset2);
			append_hydration_dev(fieldset2, input2);
			set_input_value(input2, /*password*/ ctx[2]);
			append_hydration_dev(fieldset2, t8);
			if (if_block1) if_block1.m(fieldset2, null);
			append_hydration_dev(form, t9);
			append_hydration_dev(form, button);
			append_hydration_dev(button, t10);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[6]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[7]),
					listen_dev(input2, "input", /*input2_input_handler*/ ctx[8]),
					listen_dev(form, "submit", prevent_default(/*submit*/ ctx[5]), false, true, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*error*/ ctx[3]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(div0, t5);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (dirty & /*username*/ 1 && input0.value !== /*username*/ ctx[0]) {
				set_input_value(input0, /*username*/ ctx[0]);
			}

			if (dirty & /*name*/ 2 && input1.value !== /*name*/ ctx[1]) {
				set_input_value(input1, /*name*/ ctx[1]);
			}

			if (dirty & /*password*/ 4 && input2.value !== /*password*/ ctx[2]) {
				set_input_value(input2, /*password*/ ctx[2]);
			}

			if (/*password*/ ctx[2].length > 1 && /*password*/ ctx[2].length < 6) {
				if (if_block1) ; else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(fieldset2, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty & /*password*/ 4 && button_disabled_value !== (button_disabled_value = /*password*/ ctx[2].length < 6)) {
				prop_dev(button, "disabled", button_disabled_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div3);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let $session;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Register', slots, []);
	const { session } = stores$1();
	validate_store(session, 'session');
	component_subscribe($$self, session, value => $$invalidate(9, $session = value));
	let username = '';
	let name = '';
	let password = '';
	let error = null;

	async function submit(event) {
		const response = await post(`auth/register`, { username, name, password });

		// TODO handle network errors
		$$invalidate(3, error = response.error);

		if (response.user) {
			set_store_value(session, $session.user = response.user, $session);
			goto('/');
		}
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Register> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		username = this.value;
		$$invalidate(0, username);
	}

	function input1_input_handler() {
		name = this.value;
		$$invalidate(1, name);
	}

	function input2_input_handler() {
		password = this.value;
		$$invalidate(2, password);
	}

	$$self.$capture_state = () => ({
		goto,
		stores: stores$1,
		post,
		session,
		username,
		name,
		password,
		error,
		submit,
		$session
	});

	$$self.$inject_state = $$props => {
		if ('username' in $$props) $$invalidate(0, username = $$props.username);
		if ('name' in $$props) $$invalidate(1, name = $$props.name);
		if ('password' in $$props) $$invalidate(2, password = $$props.password);
		if ('error' in $$props) $$invalidate(3, error = $$props.error);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		username,
		name,
		password,
		error,
		session,
		submit,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler
	];
}

class Register extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Register",
			options,
			id: create_fragment.name
		});
	}
}

export { Register as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuMTI2MDA1MzQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvdXRpbHMuanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3JlZ2lzdGVyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcG9zdChlbmRwb2ludCwgZGF0YSkge1xyXG4gICAgcmV0dXJuIGZldGNoKGVuZHBvaW50LCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhIHx8IHt9KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKChyKSA9PiByLmpzb24oKSk7XHJcbn0iLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBnb3RvLCBzdG9yZXMgfSBmcm9tICdAc2FwcGVyL2FwcCc7XG5cdGltcG9ydCB7IHBvc3QgfSBmcm9tICd1dGlscy5qcyc7XG5cdGNvbnN0IHsgc2Vzc2lvbiB9ID0gc3RvcmVzKCk7XG5cblx0bGV0IHVzZXJuYW1lID0gJyc7XG5cdGxldCBuYW1lID0gJyc7XG5cdGxldCBwYXNzd29yZCA9ICcnO1xuXHRsZXQgZXJyb3IgPSBudWxsO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdChldmVudCkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcG9zdChgYXV0aC9yZWdpc3RlcmAsIHsgdXNlcm5hbWUsIG5hbWUsIHBhc3N3b3JkIH0pO1xuXG5cdFx0Ly8gVE9ETyBoYW5kbGUgbmV0d29yayBlcnJvcnNcblx0XHRlcnJvciA9IHJlc3BvbnNlLmVycm9yO1xuXG5cdFx0aWYgKHJlc3BvbnNlLnVzZXIpIHtcblx0XHRcdCRzZXNzaW9uLnVzZXIgPSByZXNwb25zZS51c2VyO1xuXHRcdFx0Z290bygnLycpO1xuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlNpZ24gdXAg4oCiIENvbmR1aXQ8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cImF1dGgtcGFnZVwiPlxuXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHBhZ2VcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTMgY29sLXhzLTEyXCI+XG5cdFx0XHRcdDxoMSBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+U2lnbiB1cDwvaDE+XG5cdFx0XHRcdDxwIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cblx0XHRcdFx0XHQ8YSBocmVmPVwiL2xvZ2luXCI+SGF2ZSBhbiBhY2NvdW50PzwvYT5cblx0XHRcdFx0PC9wPlxuXG5cdFx0XHRcdHsjaWYgZXJyb3J9XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPntlcnJvcn08L2Rpdj5cblx0XHRcdFx0ey9pZn1cblxuXHRcdFx0XHQ8Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e3N1Ym1pdH0+XG5cdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiBiaW5kOnZhbHVlPXt1c2VybmFtZX0+XG5cdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIk5hbWVcIiBiaW5kOnZhbHVlPXtuYW1lfT5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGdcIiB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgYmluZDp2YWx1ZT17cGFzc3dvcmR9PlxuXHRcdFx0XHRcdFx0eyNpZiBwYXNzd29yZC5sZW5ndGggPiAxICYmIHBhc3N3b3JkLmxlbmd0aCA8IDZ9PHN1cD4gPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlBhc3N3b3JkIHRvbyBzaG9ydDwvZGl2Pjwvc3VwPnsvaWZ9XG5cdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBwdWxsLXhzLXJpZ2h0XCIgZGlzYWJsZWQ9XCJ7cGFzc3dvcmQubGVuZ3RoIDwgNn1cIj5cblx0XHRcdFx0XHRcdFNpZ24gdXBcblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC9kaXY+Il0sIm5hbWVzIjpbInN0b3JlcyJdLCJtYXBwaW5ncyI6Ijs7QUFBTyxTQUFTLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFO0FBQ3JDLElBQUksT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQzNCLFFBQVEsTUFBTSxFQUFFLE1BQU07QUFDdEIsUUFBUSxXQUFXLEVBQUUsU0FBUztBQUM5QixRQUFRLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7QUFDeEMsUUFBUSxPQUFPLEVBQUU7QUFDakIsWUFBWSxjQUFjLEVBQUUsa0JBQWtCO0FBQzlDLFNB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
