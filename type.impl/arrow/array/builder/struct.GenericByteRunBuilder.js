(function() {var type_impls = {
"arrow":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericByteRunBuilder%3CR,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#88-91\">source</a><a href=\"#impl-GenericByteRunBuilder%3CR,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, V&gt; <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow::array::builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"arrow/datatypes/trait.ArrowPrimitiveType.html\" title=\"trait arrow::datatypes::ArrowPrimitiveType\">ArrowPrimitiveType</a>,\n    V: <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#94\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteRunBuilder.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow::array::builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>GenericByteRunBuilder</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_capacity\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#109\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteRunBuilder.html#tymethod.with_capacity\" class=\"fn\">with_capacity</a>(\n    capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    data_capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>\n) -&gt; <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow::array::builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>GenericByteRunBuilder</code> with the provided capacity</p>\n<p><code>capacity</code>: the expected number of run-end encoded values.\n<code>data_capacity</code>: the expected number of bytes of run end encoded values</p>\n</div></details></div></details>",0,"arrow::array::builder::StringRunBuilder","arrow::array::builder::LargeStringRunBuilder","arrow::array::builder::BinaryRunBuilder","arrow::array::builder::LargeBinaryRunBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericByteRunBuilder%3CR,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#158-161\">source</a><a href=\"#impl-GenericByteRunBuilder%3CR,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, V&gt; <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow::array::builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"arrow/datatypes/trait.RunEndIndexType.html\" title=\"trait arrow::datatypes::RunEndIndexType\">RunEndIndexType</a>,\n    V: <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_option\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#164\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteRunBuilder.html#tymethod.append_option\" class=\"fn\">append_option</a>(\n    &amp;mut self,\n    input_value: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;&lt;V as <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>&gt;::<a class=\"associatedtype\" href=\"arrow/datatypes/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow::datatypes::ByteArrayType::Native\">Native</a>&gt;&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Appends optional value to the logical array encoded by the RunArray.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_value\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#172\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteRunBuilder.html#tymethod.append_value\" class=\"fn\">append_value</a>(\n    &amp;mut self,\n    input_value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;&lt;V as <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>&gt;::<a class=\"associatedtype\" href=\"arrow/datatypes/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow::datatypes::ByteArrayType::Native\">Native</a>&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Appends value to the logical array encoded by the RunArray.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_null\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#187\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteRunBuilder.html#tymethod.append_null\" class=\"fn\">append_null</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Appends null to the logical array encoded by the RunArray.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#198\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteRunBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"arrow/array/struct.RunArray.html\" title=\"struct arrow::array::RunArray\">RunArray</a>&lt;R&gt;</h4></section></summary><div class=\"docblock\"><p>Creates the RunArray and resets the builder.\nPanics if RunArray cannot be built.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#216\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteRunBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"struct\" href=\"arrow/array/struct.RunArray.html\" title=\"struct arrow::array::RunArray\">RunArray</a>&lt;R&gt;</h4></section></summary><div class=\"docblock\"><p>Creates the RunArray and without resetting the builder.\nPanics if RunArray cannot be built.</p>\n</div></details></div></details>",0,"arrow::array::builder::StringRunBuilder","arrow::array::builder::LargeStringRunBuilder","arrow::array::builder::BinaryRunBuilder","arrow::array::builder::LargeBinaryRunBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#64\">source</a><a href=\"#impl-Debug-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow::array::builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow/datatypes/trait.ArrowPrimitiveType.html\" title=\"trait arrow::datatypes::ArrowPrimitiveType\">ArrowPrimitiveType</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#64\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arrow::array::builder::StringRunBuilder","arrow::array::builder::LargeStringRunBuilder","arrow::array::builder::BinaryRunBuilder","arrow::array::builder::LargeBinaryRunBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#78-81\">source</a><a href=\"#impl-Default-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow::array::builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"arrow/datatypes/trait.ArrowPrimitiveType.html\" title=\"trait arrow::datatypes::ArrowPrimitiveType\">ArrowPrimitiveType</a>,\n    V: <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#83\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow::array::builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","arrow::array::builder::StringRunBuilder","arrow::array::builder::LargeStringRunBuilder","arrow::array::builder::BinaryRunBuilder","arrow::array::builder::LargeBinaryRunBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Extend%3COption%3CS%3E%3E-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#289-293\">source</a><a href=\"#impl-Extend%3COption%3CS%3E%3E-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;S&gt;&gt; for <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow::array::builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"arrow/datatypes/trait.RunEndIndexType.html\" title=\"trait arrow::datatypes::RunEndIndexType\">RunEndIndexType</a>,\n    V: <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;&lt;V as <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>&gt;::<a class=\"associatedtype\" href=\"arrow/datatypes/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow::datatypes::ByteArrayType::Native\">Native</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#295\">source</a><a href=\"#method.extend\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\" class=\"fn\">extend</a>&lt;T&gt;(&amp;mut self, iter: T)<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;S&gt;&gt;,</div></h4></section></summary><div class='docblock'>Extends a collection with the contents of an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_one\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#376\">source</a><a href=\"#method.extend_one\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_one\" class=\"fn\">extend_one</a>(&amp;mut self, item: A)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Extends a collection with exactly one element.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_reserve\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#384\">source</a><a href=\"#method.extend_reserve\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\" class=\"fn\">extend_reserve</a>(&amp;mut self, additional: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Reserves capacity in a collection for the given number of additional elements. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\">Read more</a></div></details></div></details>","Extend<Option<S>>","arrow::array::builder::StringRunBuilder","arrow::array::builder::LargeStringRunBuilder","arrow::array::builder::BinaryRunBuilder","arrow::array::builder::LargeBinaryRunBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArrayBuilder-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#121-124\">source</a><a href=\"#impl-ArrayBuilder-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, V&gt; <a class=\"trait\" href=\"arrow/array/builder/trait.ArrayBuilder.html\" title=\"trait arrow::array::builder::ArrayBuilder\">ArrayBuilder</a> for <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow::array::builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"arrow/datatypes/trait.RunEndIndexType.html\" title=\"trait arrow::datatypes::RunEndIndexType\">RunEndIndexType</a>,\n    V: <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#127\">source</a><a href=\"#method.as_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.as_any\" class=\"fn\">as_any</a>(&amp;self) -&gt; &amp;(dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a> + 'static)</h4></section></summary><div class=\"docblock\"><p>Returns the builder as a non-mutable <code>Any</code> reference.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#132\">source</a><a href=\"#method.as_any_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.as_any_mut\" class=\"fn\">as_any_mut</a>(&amp;mut self) -&gt; &amp;mut (dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a> + 'static)</h4></section></summary><div class=\"docblock\"><p>Returns the builder as a mutable <code>Any</code> reference.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_box_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#137\">source</a><a href=\"#method.into_box_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.into_box_any\" class=\"fn\">into_box_any</a>(self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow::array::builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;&gt;) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the boxed builder as a box of <code>Any</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#143\">source</a><a href=\"#method.len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the length of logical array encoded by\nthe eventual runs array.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#148\">source</a><a href=\"#method.finish\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;dyn <a class=\"trait\" href=\"arrow/array/trait.Array.html\" title=\"trait arrow::array::Array\">Array</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the array and reset this builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#153\">source</a><a href=\"#method.finish_cloned\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;dyn <a class=\"trait\" href=\"arrow/array/trait.Array.html\" title=\"trait arrow::array::Array\">Array</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the array without resetting the builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/mod.rs.html#240\">source</a><a href=\"#method.is_empty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#method.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether number of array slots is zero</div></details></div></details>","ArrayBuilder","arrow::array::builder::StringRunBuilder","arrow::array::builder::LargeStringRunBuilder","arrow::array::builder::BinaryRunBuilder","arrow::array::builder::LargeBinaryRunBuilder"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()