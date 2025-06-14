///
/// ExpensifyNitroUtilsOnLoad.kt
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2025 Marc Rousavy @ Margelo
///

package com.margelo.nitro.utils

import android.util.Log

internal class ExpensifyNitroUtilsOnLoad {
  companion object {
    private const val TAG = "ExpensifyNitroUtilsOnLoad"
    private var didLoad = false
    /**
     * Initializes the native part of "ExpensifyNitroUtils".
     * This method is idempotent and can be called more than once.
     */
    @JvmStatic
    fun initializeNative() {
      if (didLoad) return
      try {
        Log.i(TAG, "Loading ExpensifyNitroUtils C++ library...")
        System.loadLibrary("ExpensifyNitroUtils")
        Log.i(TAG, "Successfully loaded ExpensifyNitroUtils C++ library!")
        didLoad = true
      } catch (e: Error) {
        Log.e(TAG, "Failed to load ExpensifyNitroUtils C++ library! Is it properly installed and linked? " +
                    "Is the name correct? (see `CMakeLists.txt`, at `add_library(...)`)", e)
        throw e
      }
    }
  }
}
