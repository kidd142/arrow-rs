(function() {var implementors = {
"arrow_array":[["impl&lt;'a, R, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::exact_size::ExactSizeIterator\">ExactSizeIterator</a> for <a class=\"struct\" href=\"arrow_array/run_iterator/struct.RunArrayIter.html\" title=\"struct arrow_array::run_iterator::RunArrayIter\">RunArrayIter</a>&lt;'a, R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a V</a>: <a class=\"trait\" href=\"arrow_array/array/trait.ArrayAccessor.html\" title=\"trait arrow_array::array::ArrayAccessor\">ArrayAccessor</a>,\n    &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a V</a> as <a class=\"trait\" href=\"arrow_array/array/trait.ArrayAccessor.html\" title=\"trait arrow_array::array::ArrayAccessor\">ArrayAccessor</a>&gt;::<a class=\"associatedtype\" href=\"arrow_array/array/trait.ArrayAccessor.html#associatedtype.Item\" title=\"type arrow_array::array::ArrayAccessor::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div>"],["impl&lt;T: <a class=\"trait\" href=\"arrow_array/array/trait.ArrayAccessor.html\" title=\"trait arrow_array::array::ArrayAccessor\">ArrayAccessor</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::exact_size::ExactSizeIterator\">ExactSizeIterator</a> for <a class=\"struct\" href=\"arrow_array/iterator/struct.ArrayIter.html\" title=\"struct arrow_array::iterator::ArrayIter\">ArrayIter</a>&lt;T&gt;"]],
"arrow_buffer":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::exact_size::ExactSizeIterator\">ExactSizeIterator</a> for <a class=\"struct\" href=\"arrow_buffer/util/bit_iterator/struct.BitIterator.html\" title=\"struct arrow_buffer::util::bit_iterator::BitIterator\">BitIterator</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::exact_size::ExactSizeIterator\">ExactSizeIterator</a> for <a class=\"struct\" href=\"arrow_buffer/util/bit_chunk_iterator/struct.BitChunkIterator.html\" title=\"struct arrow_buffer::util::bit_chunk_iterator::BitChunkIterator\">BitChunkIterator</a>&lt;'_&gt;"]],
"arrow_json":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::exact_size::ExactSizeIterator\">ExactSizeIterator</a> for <a class=\"struct\" href=\"arrow_json/reader/tape/struct.BufIter.html\" title=\"struct arrow_json::reader::tape::BufIter\">BufIter</a>&lt;'a&gt;"]],
"arrow_row":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::exact_size::ExactSizeIterator\">ExactSizeIterator</a> for <a class=\"struct\" href=\"arrow_row/struct.RowsIter.html\" title=\"struct arrow_row::RowsIter\">RowsIter</a>&lt;'a&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()